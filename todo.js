const todo = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

console.log(todoInput.value);
function addTodo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    todoList.appendChild(li);
    span.innerText=newTodo;
    console.log(li);
 }

function handleToDoSubmit(event) { 
    event.preventDefault();
    const  newTodo =  todoInput.value ;
    todoInput.value = "";
    console.log(newTodo);
    addTodo(newTodo);
}

todo.addEventListener("submit", handleToDoSubmit);