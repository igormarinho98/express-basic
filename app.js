var express = require('express');
var app = express();
//var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');


app.get('/', (req, res) => {
	res.send("Hello World by dimarinho");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/hello',routes);
app.use('/public',express.static(path.join(__dirname, 'public')));

//http.createServer(app).listen(3000, function() {
//	console.log("Server On");
// });

	app.listen(3000, function() {
		console.log("Servidor Online");
	});