'use strict';

var express = require('express'),
	  posts = require('./mock/posts.json');

var app = express();

debugger;

app.get('/', function(req, res){
	res.send("<h1>I am loving Treehouse!</h1>");
});

app.get('/blog:id', function(req, res){ 
	var title = req.params.title;
	var post = posts[title];
	res.send(posts);
});

app.listen(3000, function(){
	console.log("The frontend server is running on port 3000!")
});
