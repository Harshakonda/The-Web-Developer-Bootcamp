
/*function isEven(num){
	if(num%2 === 0){
		return true;
	}
	else{
		return false
	}
}*/
function isEven(num){
		return num%2 === 0;
}
function factorial(num){
if(num === 0){
	return 1
}
return num * factorial(num - 1)
}

function fact(n){
	var result = 1
	for (var i = 2; i <= n; i++) {// no need od initiating i = 1 
		result = result * i;
	}
	return result;
}

function kebabToSnake(str){
	var result = str.replace(/-/g,'_');
	return result;
}