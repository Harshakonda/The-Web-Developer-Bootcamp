var playerButton1 = document.getElementById("Player1");
var score = 0;
playerButton1.addEventListener("click",function (){
	var score1 = document.getElementById("score1");
	var result = score + 1;
	score1.innerHTML = result;
})
score =score1.textContent; 