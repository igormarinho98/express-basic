var express = require('express');
var app = express();
//var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');

app.set('views', './views_dir');
app.set('view engine', 'pug');

app.use(function (req, res, next) {
	req.name = 'SON';
	console.log('I am a custom middleware');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/hello',routes);
app.use('/public',express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
	res.status(500)
	.json({
		message: 'something wrong happened'
	});
});

app.get('/', (req, res) => {
	res.render('index',{
		message: 'Good Day from Express by dimarinho'
	});
//	res.send("Hello World by dimarinho from " + req.name);
});


//http.createServer(app).listen(3000, function() {
//	console.log("Server On");
// });

	app.listen(3000, function() {
		console.log("Servidor Online");
	});