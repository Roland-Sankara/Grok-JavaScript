// Get the input values
let input = document.querySelector("input");
// get the tasks container
let tasksContainer = document.querySelector("#tasks-container");
// Button
let addBtn = document.querySelector('button');

// get the value
let newTask = input.value;

// Create an element with buttons
function createTasksElement(){
    // get the value
    let task = input.value;
    if(!task.length){
        return;
    }

    // create li element
    let taskElement = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    let spanName = document.createElement('span');
    spanName.classList.add("task__name");
    let actions = document.createElement('span');
    actions.classList.add("task__actions");

    // Edit button, space and Delete button
    let editBtn = document.createElement('span');
    editBtn.innerText = "Edit";
    editBtn.style.cursor = "pointer";

    let spacer = document.createElement('span');

    let deleteBtn = document.createElement('span');
    deleteBtn.innerText = "Delete";
    deleteBtn.style.cursor = "pointer";

    // Attach event listeners
    editBtn.addEventListener('click', (e)=>editTask(e));
    deleteBtn.addEventListener('click', (e)=>deleteTask(e));
    checkbox.addEventListener('click', (e)=>markComplete(e));

    actions.append(editBtn, spacer, deleteBtn);

    // Add data
    spanName.innerText = task;

    // add all to task Element
    taskElement.append(checkbox, spanName, actions);

    // Add task Elememt to tasks container
    tasksContainer.appendChild(taskElement);

    // Clear the input
    input.value = "";
}

function deleteTask(eventObj){
    // remove parent of the even target
    eventObj.target.parentNode.parentNode.remove();
}

function editTask(eventObj){
    // get the current value
    let currentTask = eventObj.target.parentNode.previousSibling.innerText;
    // Ask user to edit the value
    let newValue = prompt("Edit Task", currentTask);
    // With the new value, update the element
    eventObj.target.parentNode.previousSibling.innerText = newValue;
}

function markComplete(eventObj){
    // get the current task
    let currentTask = eventObj.target.nextSibling;

    // Strike Through
    if(eventObj.target.checked){
        currentTask.style.textDecoration = "line-through";
    }else{
        currentTask.style.textDecoration = "none";
    }
}

// Add event listenier 
addBtn.addEventListener('click', ()=>{
    createTasksElement();
})
