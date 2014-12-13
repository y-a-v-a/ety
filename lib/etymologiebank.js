var http = require('http');
var stream = require('stream');

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
    options.path = searchSuffix + '/' + term;
    http.get(options, function(response) {
        var b = createWritable();
        response.on('data', function(chunk) {
            b.write(chunk);
        });
        response.on('end', function() {
            var buffer = Buffer.concat(b.data);
            callback(buffer.toString('utf8'));
        });
    });
};

var show = function(word, callback) {
    options.path = showSuffix + '/' + word;
    http.get(options, function(response) {
        var b = createWritable();
        response.on('data', function(chunk) {
            b.write(chunk);
        });
        response.on('end', function() {
            var buffer = Buffer.concat(b.data);
            callback(buffer.toString('utf8'));
        });
    });
};

module.exports = {
    search: search,
    show: show,
    showToJson: showToJson,
    searchToJson: searchToJson
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

function searchToJson(term, html) {
    var response = {
        term: term,
        results: []
    };
    var regexp = /href=\"http:\/\/www.etymologiebank.nl\/trefwoord\/([a-z]+)\"\>(.*)\<\/a\>/ig;
    if (regexp.test(html) === true) {
        var matches = html.match(regexp);
        console.log(matches);
        if (matches.length > 0) {
            for (var i = 0; i < matches.length;  i++) {
                response.results.push(matches[i]);
            }
        }
    }
    return JSON.stringify(response);
}

function showToJson(word, html) {
    var response = {
        word: word,
        sources: []
    };
    return JSON.stringify(response);
}

