var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.json({
		message: 'hello world'
	})
});

router.get('/params/:name', function(req, res) {
	res.json({
		params: req.params,
		host: req.hostname,
		headers: req.headers
	});
});

router.post('/body', function(req, res) {
	res.json(req.body);
});

router.get('/post', function(req, res) {
	res.send('ok');
});

module.exports = router;