var str = prompt("Are you still there:?");

/*if(str === "yes"){
	alert("your are good");
}
else{
	var str = prompt("Are you still there:?");

}*/

/*while(str !== "yes" && str !== "yeah"){
	var str = prompt("Are you still there:?");

}

alert("your are good");*/

while(str.indexOf('yes') === -1 && str.indexOf('yeah') === -1){
	var str = prompt("Are you still there:?");

}

alert("your are good");