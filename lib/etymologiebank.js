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
    var regexp = /href=\"http:\/\/www.etymologiebank.nl\/trefwoord\/([a-z]+)\"\>(.*?)\<\/a\>/g;
    var matches;
    while ((matches = regexp.exec(html)) != null) {
        if (matches.index === regexp.lastIndex) {
            regexp.lastIndex++;
        }
        if (matches.length >= 3) {
            response.results.push(matches[2].trim());
        }
    }
    return JSON.stringify(response);
}

function showToJson(word, html) {
    var response = {
        word: word,
        sources: []
    };
    var regexp = /\<h3\>\<a name.*\<\/p\>\<\/div\>/i;
    html = html.replace(/[\n\t]+/, '');
    var m = regexp.exec(html);
    console.log(m);
    
    return JSON.stringify(response);
}

