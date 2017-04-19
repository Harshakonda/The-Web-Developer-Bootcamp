var express = require('express');
var app = express();
app.get('/',function (req, res){
	res.send('Hello this is Harsha');
})
app.get('/speak/:animal',function (req, res){
	var sounds ={
		cow : 'woo',
		cat : 'meow',
		dog: 'bow'
	}
	// if(req.params.animal === 'cat'){
	// 	var sound = 'Meoaw';
	// }
	var animal = req.params.animal;
	var sound = sounds[animal];
	console.log(req.params)
	res.send('this '+ animal +' says ' + sound )
})
app.get('/repeat/:word/:number',function (req, res){
	var words = req.params.word; 
	 var num = Number(req.params.number);
	 var result = '';
	for (var i = 0 ;i< num;i++){
		result += words;
	}
	res.send(result)
})
app.get('*',function (req, res){
	res.send('What the hell I am doing here');
})
app.listen('3000',function(){
	console.log("server is calling in Port 3000");
})