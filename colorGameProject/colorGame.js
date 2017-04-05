 var numSqaures = 6;
 var colors = getRandomColors(numSqaures);
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
 	header.style.background = '#4682b4';
 	colors = getRandomColors(numSqaures);
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
 	header.style.background = '#4682b4';
 	easy.classList.add('selected');
 	hard.classList.remove('selected');
 	numSqaures = 3;
 	colors = getRandomColors(numSqaures);
 	pickedColor = pickColor();
 	idColor.textContent = pickedColor;
 	 for(var i = 0; i< sqaure.length; i++){
 		if(colors[i]){
 			sqaure[i].style.background = colors[i];
 		}else{
 			sqaure[i].style.display = 'none';
 		}
 	}
 	result.textContent = '';
 	reset.textContent = 'New Colors';
 })
 
 hard.addEventListener('click',function(){
 		header.style.background = '#4682b4';
 		easy.classList.remove('selected');
 		hard.classList.add('selected');
 		numSqaures = 6;
 		colors = getRandomColors(numSqaures);
 		pickedColor = pickColor();
 		idColor.textContent = pickedColor;
 		for(var i = 0; i< colors.length; i++){
 			sqaure[i].style.background = colors[i];
 			sqaure[i].style.display = 'block';
 			}
 		result.textContent = '';
 		reset.textContent = 'New Colors';
 })
