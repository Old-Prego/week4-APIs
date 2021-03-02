var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// Clears out the to-do list and renders it again with any list items that
// were saved in local storage.
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Clears out the innerHTML and makes the amount of spans equal to the 
  // length of the to-do list
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // For each to-do stored in local storage, it fills in the spans with content
  // based on the values in local storage.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// This loads the proper data and brings it up on the page upon loading.
function init() {
  // TODO: What is the purpose of the following line of code?
  // Reads the locally stored to-do list
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // Skips null listings in local storage
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  //Calls the render function
  renderTodos();
}

function storeTodos() {
  // Stores new, fully built To-do's
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// 
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
