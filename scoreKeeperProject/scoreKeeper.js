var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Result = document.querySelector("#p1result");
var p2Result = document.querySelector("#p2result");
var inputChange = document.querySelector("input");
var countChange = document.querySelector("#count");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Result.classList.add("winner");
		}
		p1Result.textContent = p1Score;
	}
})
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Result.classList.add("winner");
			gameOver = true;
		}
		p2Result.textContent = p2Score;
	}
}) 
resetButton.addEventListener("click",function(){
	reset();
	 inputChange.value = null;
	 winningScore = 5;
	 countChange.textContent = 5;
})
function reset(){
	 p1Score = 0;
	 p2Score = 0;
	 gameOver = false;
	 p1Result.textContent = p1Score;
	 p2Result.textContent = p2Score;
	 p1Result.classList.remove("winner");
	 p2Result.classList.remove("winner");
}
inputChange.addEventListener("change",function(){
	countChange.textContent = Number(this.value);
	winningScore = Number(this.value);
	reset();
})