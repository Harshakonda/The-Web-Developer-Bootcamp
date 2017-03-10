var age = prompt("Enter the Age to Perform Operations:");
console.log(" Enter value " + age +" is "+ typeof(age))
var odd = age % 2;
if (age < 0){
	console.log(age +" Error occured, Negative values should not enter")
}
else if(age == 21){
	console.log(age + " happy 21st BirthDay")
}
else if(odd !== 0){
	console.log (age + " your age is odd Number")
}
else if ((age > 0 ) && (Math.sqrt(age) % 1 === 0)){
	console.log(age + " Your is Perferct Square!!")
}
else{
	console.log(age + " You number is valid Integer!!")
}