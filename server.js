// Initial Setup

var express = require('express'),
app = express(),
mongodb = require('mongodb'),
mysql = require('mysql'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
fs = require('fs'),
fileData;




app.get('/api/file', function(req,res){
	fs.readFile('public/information.json', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}

		fileData = JSON.parse(data.trim());

	});
	
	res.json(fileData);
})


app.get('/', function(req,res){
	res.json({
		successfull : "true"
	})
})

app.get('/api/test', function(req,res){
	res.json({
		successfull : "test"
	})
})

app.get('/api/test/mongodb', function(req,res){
	res.json({
		successfull : "mongo"
	})
})
app.get('/api/test/sql', function(req,res){
	res.json({
		successfull : "sql"
	})
})
app.get('/api/test/file', function(req,res){
	res.json({
		successfull : "file"
	})
})


app.use(express.static('public'));

var server = app.listen(3000, function(){
	var port = server.address().port;

	console.log("Server started. Listen to connection on port " + port);
})