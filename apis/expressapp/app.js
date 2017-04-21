var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs');

app.get('/result',function(req,res){
	request('http://www.omdbapi.com/?s=california',function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body)
			res.render('results',{data :data})
			console.log(data)
		}
	})
})

app.listen(3000,function(){
	console.log('Start Movie app server!!! at localhost://3000');
})


