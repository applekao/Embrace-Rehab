var todo = {}

todo.todoList = [];

var testOption = {
	name: "Walk 200 steps",
	assign: "Louis",
	due: 24,
	content: "Walk 200 step after you pee.",
	repeat: 24,
	url: null
}

todo.createNew = function(option){

todo.todoList[todo.todoList.length] = new todo.newTodoItem(option);

}

todo.newTodoItem = function(option){

 	//name, assign, due, content, reminder, url
	// for( var key in options ){
	// 	console.log( options[key] );
	// }
	this.option = option; 

 	todo.newTodoItem.prototype.add = function(){
 	var todoTemp = {
			start:"<div class='panel panel-embrace-rehab' todoId='" + todo.todoList.length  + "''>",
			heading:"<div class='panel-heading'>",
			dueTime:"<div class='panel-body todoDueTime'>",
			end:"</div>"
		}

		var newTodoItem = todoTemp.start +
								todoTemp.heading + option.name + todoTemp.end +
						    	todoTemp.dueTime + option.due + todoTemp.end; +
						  todoTemp.end;
		document.getElementById("todoListBox").innerHTML += newTodoItem;

		todo.checkLength("add");
 	}

 	todo.newTodoItem.prototype.clear = function(){
 		todo.checkLength();
 	}

 	todo.newTodoItem.prototype.add();

}

todo.checkLength = function(caller){
	var currentLength = null;
	if(caller == "add"){
		currentLength = todo.todoList.length + 1;
	}
	else{
		currentLength = todo.todoList.length;
	}
	if(currentLength == 0){
		document.getElementById("emptyHolder").style.display = "block";
	}
	else{
		document.getElementById("emptyHolder").style.display = "none";	
	}
}


