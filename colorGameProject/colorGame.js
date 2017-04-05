 var numSqaures = 6;
 var colors = [];
 var pickedColor;
 var sqaure = document.querySelectorAll('.gridCell');
 var idColor = document.querySelector('#idColor');
 var result = document.querySelector('#result');
 var header = document.querySelector(".header");
 var reset = document.querySelector("#reset");
 var mode = document.querySelectorAll('.mode');

 init();
  
  function init(){
		clickButtons();
		clickButtonListnr();
		modeButtonListnr();
  	}
 function clickButtonListnr(){
 			//click listener
 		for(var i = 0; i< sqaure.length; i++){
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
 }
 function modeButtonListnr(){
 	//mode listener
 		 for (var i = 0; i < mode.length; i++){
		 		mode[i].addEventListener("click",function(){
		 		mode[0].classList.remove('selected');
		 		mode[1].classList.remove('selected');
		 		this.classList.add('selected');
		  		this.textContent === 'Easy' ? numSqaures = 3 : numSqaures =6 ;
		 		clickButtons();
 			})
		 }
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



 function clickButtons(){
 	header.style.background = '#4682b4';
 	colors = getRandomColors(numSqaures);
 	pickedColor = pickColor();
 	idColor.textContent = pickedColor;
 	 for(var i = 0; i< sqaure.length; i++){
 		//add initial colors
 		if(colors[i]){
 			sqaure[i].style.display = 'block';
 			sqaure[i].style.background = colors[i];
 		}else{
 			sqaure[i].style.display = 'none';
 		}
 	 	
 	}
 	result.textContent = 'Guess a Color';
 	reset.textContent = 'New Colors';
 }
  //reset Listener
	reset.addEventListener('click',function(){
 		clickButtons();
 	})