var list = [];
var task = prompt("enter what you want todo")
while(task !== "quit"){
/*	if (task === "list"){
		console.log('*********');
	list.forEach(function(funList){
		console.log(list.indexOf(funList)+" : " + funList);

	})
console.log('*********');
}*/
	if (task === "list"){
		toDoList();
}
/*if (task === "list"){
	console.log(list)
}*/else if (task === "new"){
	newToDoAdd();
}
else if(task ==="delete"){
	deletToDo();
}
task = prompt("enter what you want todo")
}
console.log("Successfully Quit!!")

function toDoList(){
			console.log('*********');
	list.forEach(function(funList , i){
		console.log(i +" : " + funList);

	})
console.log('*********');
}

function newToDoAdd(){
		var newTodoList =prompt("Enter new task :")
	list.push(newTodoList);
	console.log(newTodoList + " added to the list")
}

function deletToDo(){
		var deleteList = prompt("Enter the inexOf the array to delete");
	// if(deleteList !== list[deleteList]){	
	list.splice(deleteList,1);
	console.log('Todo list delete');
// }

}