//problem: user interaction doesn't provide desired results
//solution: add interactivity so the user can manage daily task

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed tasks

//New Task List Item
var createNewTaskElement = function(taskString){
	//create list item
	var listItem = document.createElement("li");
		//input {checkbox}
		var checkBox = document.createElement('input');//checkbox
				//label
		var label =document.createElement('label');
				//imput (text)
		var editInput =document.createElement('input')
				//button.edit
		var editButton =document.createElement('button')
				//button.delete
		var deleteButton =document.createElement('button')
				//Each of these elements, needs modified 

		checkBox.type = "checkbox";
		editInput.type = "text";

		editButton.innerText = "Edit";
		editButton.className = "edit";
		deleteButton.innerText = "Delete";
		deleteButton.className = "delete";

				//each element needs appended
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new task
var addTask = function(){
//create a new list item with the text from #new-task:
		console.log("add task...")
		var listItem = createNewTaskElement(taskInput.value);
	//append listItem to incompleteTaskHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted)

	taskInput.value - "";
}
		

			
//Edit an existing task
var editTask = function(){
		console.log("edit task...")

		var listItem = this.parentNode;

		var editInput = listItem.querySelector("input[type=text]");
		var label = listItem.querySelector("label");
}
		//when the edit button is pressed
		//if the class of the parent is .editMode
		if(containsClass){
			label.innerText - editInput.value;
		} else {
			listItem.classList.toggle("editMode");
		}
				//switch from editMode
				//lable text become the input's value
		//else
				//switch to edit mode 
				//input value becomes the label's text

		//toggle .editMode on the parent

//delete an exisiting task
var deleteTask =function(){
		console.log("delete task...")
				
	var listItem = this.parentNode;
	var ul - listItem.parentNode;
//remove the parent list item from the ul
ul.removeChild(listItem);
}

//mark a task as complete
var taskCompleted = function(){
		console.log("task complete...")
				//append the task list item to the #completed-tasks
				var listItem = this.parentNode;
		completedTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskIncomplete)

}

//mark a task as imcomplete
var taskIncomplete = function(){
		console.log("task incomplete...")
				//append the task list item to the #completed-tasks
				var listItem = this.parentNode;
		incompleteTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted)
	}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("bind list item events")
	//select it's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButtong = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button

		editButton.onclick = editTask;
		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		//bind taskCompleted to checkbox
		checkBox.onclick =
}

//Set the click handler to the addTask function
addButton.onclick = addTask;
addButton.addEventListener('click', )

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i += 1){
	bindTaskEvents(incompleteTasksHolder.children[1], tasksCompleted);
		//bind events to list item's children (taskCompleted)
}
		


//cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i += 1){
	bindTaskEvents(completedTasksHolder.children[1], tasksIncomplete);
	//for each list item
		//bind events to list item's children (taskIncomplete)
