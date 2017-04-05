 var colors = getRandomColors(6);
 var sqaure = document.querySelectorAll('.gridCell');
 var pickedColor = pickColor();
 var idColor = document.querySelector('#idColor');
 var result = document.querySelector('#result');
 var header = document.querySelector(".header");
 var reset = document.querySelector("#reset");
 var easy = document.querySelector('#easy');
 var hard = document.querySelector('#hard');
 idColor.textContent = pickedColor;
 for(var i = 0; i< sqaure.length; i++){
 	//add initial colors
 	sqaure[i].style.background = colors[i];
 	//add click listeners
 	sqaure[i].addEventListener('click',function(){
 		var clickedColor = this.style.background;
 		 if(clickedColor === pickedColor){
 			result.textContent = 'Correct!!';
 			//commenting to write diffent function
 			/*sqaure.forEach(function(ele){
 				ele.style.background = clickedColor;	
 			})*/
 			allSquareChange(clickedColor);
 			header.style.background = clickedColor;
 			reset.textContent = 'Play Again?'
 		}else{
 			this.style.background = '#232323';
 			result.textContent = 'Try Again!!';
 		}
 	})
 }

 function allSquareChange(color){
 	for(var i =0; i<sqaure.length;i++){
 		sqaure[i].style.background = color;
 	}
 }
 function pickColor(){
 	var randomcolor = Math.floor(Math.random() * colors.length);
 	return colors[randomcolor];
 }
 function getRandomColors(num){
 	arr = [];
 	for(var i=0; i<num;i++){
 	 arr.push(randomColor()); 
 	}
 	return arr;
 }
 function randomColor(){
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
 	var result = 'rgb('+ r +', ' + g + ', ' + b + ')' ;
 	return result;
 }

 reset.addEventListener('click',function(){
 	header.style.background = 'blue';
 	colors = getRandomColors(6);
 	pickedColor = pickColor();
 	idColor.textContent = pickedColor;
 	 for(var i = 0; i< sqaure.length; i++){
 		//add initial colors
 	 	sqaure[i].style.background = colors[i];
 	}
 	result.textContent = '';
 	reset.textContent = 'New Colors';
 })
 easy.addEventListener('click',function(){
 	easy.classList.add('selected');
 	hard.classList.remove('selected');
 	colors = getRandomColors(3);
 	pickedColor = pickColor();
 	idColor.textContent = pickedColor;
 	//  for(var i = 0; i< 4; i++){
 	// 	//add initial colors
 	//  	sqaure[i].style.background = colors[i];
 	// }
 })

 hard.addEventListener('click',function(){
 		easy.classList.remove('selected');
 		hard.classList.add('selected');
 		colors = getRandomColors(6);
 		pickedColor = pickColor();
 		idColor.textContent = pickedColor;
 })