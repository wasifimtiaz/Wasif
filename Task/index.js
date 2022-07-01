var taskInput = document.getElementById("new-task"); //Add a new task.
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks


var createNewTaskElement = function (taskString) {
	var listItem = document.createElement("li");


	var label = document.createElement("label"); //label
	
	var editInput = document.createElement("input"); //text

	var editButton = document.createElement("button"); //edit button

	var deleteButton = document.createElement("button"); //delete button

	label.innerText = taskString;

	
	editInput.type = "text";

	editButton.innerText = "Edit"; 
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	//and appending.
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
};

var addTask = function () {
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem = createNewTaskElement(taskInput.value);

	
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
};



var editTask = function () {
	console.log("Edit Task...");
	console.log("Change 'edit' to 'save'");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
	
	if (containsClass) {
		
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}

	
	listItem.classList.toggle("editMode");
};

//Delete task.
var deleteTask = function () {
	console.log("Delete Task...");

	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	
	ul.removeChild(listItem);
};

//Mark task completed
var taskCompleted = function () {
	console.log("Complete Task...");
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
};


addButton.onclick = addTask;
addButton.addEventListener("click", addTask);

var bindTaskEvents = function (taskListItem) {
	console.log("bind list item events");
	//select ListItems children
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	//Bind editTask to edit button.
	editButton.onclick = editTask;
	//Bind deleteTask to delete button.
	deleteButton.onclick = deleteTask;
};