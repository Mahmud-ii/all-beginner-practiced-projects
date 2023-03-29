class TODOItem {
    constructor(text, status) {
      this.text = text;
      this.status = status;
    }
}

const todoInput = document.querySelector(".todo-input")
const addBtn = document.querySelector(".todo-btn")
let  todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector('.todo-filter')

const UNCOMPLETED = "UNCOMPLETED";
const COMPLETED = "COMPLETED";

// event listeners
document.addEventListener("DOMContentLoaded", getTodos)
addBtn.addEventListener("click", addToList)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", todoFilter)

// functions
function addToList (event){
    event.preventDefault()

    // console.log(event.target.parentNode);
    let todo = document.createElement("div")
    todo.classList.add("todo")
    
    // creating htmlElement li under div
    const newItem = document.createElement("li") 
    newItem.classList.add("todo-item")
    newItem.innerText = todoInput.value
    todo.appendChild(newItem)
    if(todoInput.value !== ""){
        saveLocalTodos(new TODOItem(todoInput.value, UNCOMPLETED))
    }

    // creating button complete
    const markBtn = document.createElement("button")
    markBtn.classList.add("mark-btn")
    markBtn.innerText = "✔"
    todo.appendChild(markBtn)
    
    // creating button trash
    const trashBtn = document.createElement("button")
    trashBtn.classList.add("trash-btn")
    trashBtn.innerText = "❌"
    todo.appendChild(trashBtn)

    // appending the todo div to ul parent
    todoList.appendChild(todo)
    todoInput.value = "" 
}

function deleteCheck(e){
    let childN = e.target.parentNode
    if(e.target.classList.value === "trash-btn"){
        childN.parentNode.removeChild(childN)//if delete button is clicked then remove/deleting that todo 
        removeLocalTodos(childN.children[0].innerText)
    }else if(e.target.classList.value === "mark-btn"){
        childN.classList.toggle("completed")//checking if todo is completed or not, if completed toggle it's class with completed,
        
        saveLocalTodos(new TODOItem(childN.children[0].innerText, COMPLETED));// also save the status to local storage
    }else{
        return
    }
}

// filtering the todos with help of there class if it's completed/uncompleted or else;
function todoFilter(e){
    let todos1 = todoList.children//return html elements only
    // let todos2 = todoList.childNodes //return all nodes;
    // todos1.forEach(function(item) {
    for(let item of todos1){
        switch(e.target.value){
            case 'all':
                item.style.display = "flex"
                break;
            case 'completed':
                if(item.classList.contains("completed")){
                    item.style.display = "flex"
                }else{
                    item.style.display = "none"
                }
                break;
            case 'uncompleted':
                if(!item.classList.contains('completed')){
                    item.style.display = "flex"
                }else{
                    item.style.display = "none"
                }
                break;
        }
    }
}

// checking if the localstorage have any data;
function checkLocal(todos){
    if(localStorage.getItem("todos") === null){
        return todos = [];//if there is nothing in the locStore then create an empty array;
    }else{
        return todos = JSON.parse(localStorage.getItem("todos"));//if there is data in the locStore then todos=thatData;
    }
}


// saving the todos text values to the local storage;
function saveLocalTodos(todo){
    let todos;
    todos = checkLocal(todos)

    //for classes also
    const itemIndex = todos.findIndex((element, index) => {
        if (element.text === todo.text) {
          return true;
        }
    });
    if (itemIndex == -1) {
        todos.push(todo)
    }else {
          if (todos[itemIndex].status === COMPLETED) {
          todo.status = UNCOMPLETED;
    }else if(todos[itemIndex].status === UNCOMPLETED) {
          todo.status = COMPLETED;
        }
        todos[itemIndex] = todo;
      }
    localStorage.setItem("todos", JSON.stringify(todos))
}

// rendering the saved data in the locStore to the window; or update the screen ui after reload screen,
function getTodos(){
    let todos;
    todos = checkLocal(todos)

    todos.forEach(valData => {

        let todo = document.createElement("div")
        todo.classList.add("todo")

        // creating htmlElement li under div
        const newItem = document.createElement("li") 
        newItem.classList.add("todo-item")
        newItem.innerText = valData.text
        if (valData.status === COMPLETED) {
            todo.classList.toggle("completed");
          }
        todo.appendChild(newItem)

        // creating htmlElement button complete under div
        const markBtn = document.createElement("button")
        markBtn.classList.add("mark-btn")
        markBtn.innerText = "✔"
        todo.appendChild(markBtn)
        
        // creating htmlElement button delete under div
        const trashBtn = document.createElement("button")
        trashBtn.classList.add("trash-btn")
        trashBtn.innerText = "❌"
        todo.appendChild(trashBtn)

        // appending the todo div to ul parent
        todoList.appendChild(todo)
    })
}

//remove the saved todos from localStorage,
function removeLocalTodos(todoText){
    let todos;
    todos = checkLocal(todos)
    for(let i in todos){
        if(todos[i].text === todoText){
            todos.splice(i, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }
}
