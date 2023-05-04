const todo = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todos = []; //todos 가 초기화 되지않고 값이 변할수있게

function saveToDos(){ 
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    todos = todos.filter((toDo)=> toDo.id !== parseInt(li.id) );
    li.remove(); 
    saveToDos();
 }
function addTodo (newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    todoList.appendChild(li);
    span.innerText=newToDo.text;

    const button = document.createElement ("button");
    button.innerText = "X";
    li.appendChild(button);
    button.addEventListener ( "click",deleteToDo);
 }

function handleToDoSubmit(event) { 
    event.preventDefault();
    const  newTodo =  todoInput.value ;
    todoInput.value = "";
    const newToDoObj = { 
        text : newTodo,
        id : Date.now()
    } ;
    todos.push(newToDoObj);
    addTodo(newToDoObj);
    saveToDos();
}

todo.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    todos = parsedToDos ; // 이전 todos 값을 계속 추가해주는것
    parsedToDos.forEach(addTodo);
}