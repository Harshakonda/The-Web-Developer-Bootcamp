var secretNum = 7;
var stringNum = prompt("Guess the Number:");
var guess = Number(stringNum);

if (secretNum === guess){
	alert("You guess is correct")
}

else if (secretNum < guess){
	alert("Thats Too high...")
}
else{
	alert("Thats Too Low")
}