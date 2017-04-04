 var colors = ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"]
 var sqaure = document.querySelectorAll('.gridCell');
 var pickedColor = colors[3];
 var idColor = document.querySelector('#idColor');
 var result = document.querySelector('#result');
 var header = document.querySelector("#header")
 idColor.textContent = pickedColor;
 for(var i = 0; i< sqaure.length; i++){
 	//add initial colors
 	sqaure[i].style.background = colors[i];
 	//add click listeners
 	sqaure[i].addEventListener('click',function(){
 		var clickedColor = this.style.background;
 		 if(clickedColor === pickedColor){
 			result.textContent = 'Correct!!';
 			sqaure.forEach(function(ele){
 				ele.style.background = clickedColor;	
 			})
 			header.style.background = clickedColor;
 		}else{
 			this.style.background = '#232323';
 			result.textContent = 'Try Again!!';
 		}
 	})
 }
 
 /*sqaure.forEach(function(ele){
 	ele.style.background = getRandomColor();
 })
 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}*/