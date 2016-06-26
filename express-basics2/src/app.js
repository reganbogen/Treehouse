'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send("<h1>I Love Treehouse!</h1>");
});

app.get('/blog', function(req, res){

});

app.listen(3000, function(){
	console.log("The frontend server is running on port 3000!")
});