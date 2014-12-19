var express = require('express');
var router = express.Router();
var ety = require('../lib/etymologiebank.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/query/:query', function(req, res) {
    res.send(req.result);
});

router.get('/show/:show', function(req, res) {
    res.send(req.result); 
});

module.exports = router;

router.param('query', function(req, res, next, query) {
    ety.search(query, function(err, result) {
        if (err) console.log(err);
        req.result = result;
        next();
    });
});

router.param('show', function(req, res, next, show) {
    ety.show(show, function(err, result) {
        if (err) console.log(err);
        req.result = result;
        next(); 
    });
});