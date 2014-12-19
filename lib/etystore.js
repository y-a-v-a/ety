var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ety');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var termSchema = new Schema({
    term: String,
    results: [{ term: String, link: String}],
    date: { type: Date, default: Date.now },
});

var wordSchema = new Schema({
    word: String,
    title: String,
    sources: [{ source: String, lemma: String}],
    date: { type: Date, default: Date.now }
});

var Term = mongoose.model('Term', termSchema);
var Word = mongoose.model('Word', wordSchema);

function storeTerm(obj, callback) {
    var term = obj.term;
    findTerm(term, function(err, found) {
        if (found.length === 0) {
            var t = new Term(obj);
            t.save(function(err) {
                callback(err);
            });
        } else {
            console.log('Term already in db: ' + term);
        }
    });
}

function storeWord(obj, callback) {
    var word = obj.word;
    findWord(word, function(err, found) {
        if (found.length === 0) {
            var w = new Word(obj);
            w.save(function(err) {
                callback(err);
            });            
        } else {
            console.log('Word already in db: ' + word);
        }
    });

}

function findTerm(term, callback) {
    Term.find({term: term}, callback);
}

function findWord(word, callback) {
    Word.find({word: word}, callback);
}

module.exports = {
    storeTerm: storeTerm,
    storeWord: storeWord,
    findTerm: findTerm,
    findWord: findWord
};