var http = require('http');
var stream = require('stream');
var jsdom = require("jsdom");
var db = require('./etystore');

var url = 'www.etymologiebank.nl';
var searchSuffix = '/zoeken';
var showSuffix = '/trefwoord';

var options = {
    hostname: url,
    port: 80,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36'
    }
};

var search = function(term, callback) {
    db.isUnknown(term, function(err, isUnknown) {
        if (isUnknown) {
            callback(null, { term: term, results: [] });
        } else {
            db.findTerm(term, function(err, found) {
                if (found.length > 0) {
                    callback(null, found[0]);
                } else {
                    searchTerm(term, callback);
                }
            });
        }
    });
};

var show = function(word, callback) {
    db.findWord(word, function(err, found) {
        if (found.length > 0) {
            callback(null, found[0]);
        } else {
            showWord(word, callback);
        }
    });
};

var searchTerm = function(term, callback) {
    options.path = searchSuffix + '/' + term;
    http.get(options, function(response) {
        var b = createWritable();
        response.on('data', function(chunk) {
            b.write(chunk);
        });
        response.on('end', function() {
            var buffer = Buffer.concat(b.data);
            searchToJson(term, buffer.toString('utf8'), callback);
        });
    });
};

var showWord = function(word, callback) {
    options.path = showSuffix + '/' + word;
    http.get(options, function(response) {
        var b = createWritable();
        response.on('data', function(chunk) {
            b.write(chunk);
        });
        response.on('end', function() {
            var buffer = Buffer.concat(b.data);
            showToJson(word, buffer.toString('utf8'), callback);
        });
    });
};

module.exports = {
    search: search,
    show: show,
    searchToJson: searchToJson,
    showToJson: showToJson
};

function createWritable() {
    var converter = new stream.Writable();
    converter.data = [];
    converter._write = function (chunk, encoding, callback) {
        var curr = this.data.push(chunk);
        if (curr !== this.data.length) {
            callback(new Error('Error pushing buffer to stack'));
        } else {
            callback(null);
        }
    };
    return converter;
}

function searchToJson(term, html, callback) {
    var response = {
        term: term,
        results: []
    };
    jsdom.env({
        html: html,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, window) {
            var $ = window.$;
            var results = [];

            $("#text p a").each(function() {
                var link = $(this).attr('href').replace(/^.*\//,'');
                var foundTerm = $(this).text().trim();
                if (foundTerm === 'Meld' && link === 'reageer') {
                    db.storeUnknown(term, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                    return callback(new Error('Unknown'), { term: term, results: [] });
                }
                results.push({ term: foundTerm, link: link});
            });

            response.results = results;
            callback(null, response);
            db.storeTerm(response, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

function showToJson(word, html, callback) {
    var response = {
        word: word,
        title: '',
        sources: []
    };
    jsdom.env({
        html: html,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, window) {
            var $ = window.$;
            var title = $('#text > h2').text();
            var sources = [];

            $("a[name]").each(function() {
                var source = $(this).parent().text();
                var lemma = $(this).parent('h3').next('.lemma').html();
                sources.push({ source: source, lemma: lemma});
            });

            response.title = title;
            response.sources = sources;
            callback(null, response);
            db.storeWord(response, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}




