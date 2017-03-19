/*var button = document.getElementsByTagName("button")
var body = document.getElementsByTagName('body');

button.addEventListener("click",function(){
	body.style.backgroundcolor = "yellow";
})*/

var button = document.querySelector("button");
var isYellow = false;
button.addEventListener("click",function(){
	var body = document.querySelector("body");
	if(isYellow){
	body.style.background = "white";
	isYellow = false
	}else{
		body.style.background = "yellow";
		isYellow = true
	}
})