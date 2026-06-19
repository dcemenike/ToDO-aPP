const todoArray = JSON.parse(localStorage.getItem('task')) || [];
let editIndex;

function loadTodo() {
    displayTodo()
}


function addTodo() {
    todoContent = document.getElementById('todoInp').value;
    // console.log(todoContent);
    if (todoContent.trim() === "") {
        alert('Fill In The Input')
    } else {
        document.getElementById('todoInp').value = "";
        todoArray.push(todoContent.trim())
        addToLocalStorage()
        // console.log(todoArray);
        displayTodo()
    }
}

function deleteToDo(i) {
    const confirmOption = confirm("Are you sure you want to delete")
    if (confirmOption) {
        todoArray.splice(i, 1)
        addToLocalStorage()
        displayTodo()
    }
}

function editToDo(i) {
    editIndex = i;
    newTodoInp.value  = todoArray[i]
}
function makeChanges() {
    const newUserInput = newTodoInp.value;
    if(newUserInput.trim() == '') {
        alert('Input cannot be empty')
    } else {
        todoArray.splice(editIndex, 1, newUserInput)
        addToLocalStorage()
        displayTodo()
    }
}

function displayTodo() {

    document.getElementById("displayArea").innerHTML = ''
    for (let i = 0; i < todoArray.length; i++) {
        const element = todoArray[i]
        // console.log(element);
        const todoList =
            `<p class="text-start">
        ${i + 1}. ${element}
        <button class="btn btn-sm btn-warning rouded-2" onclick="editToDo(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
        <button class="btn btn-sm btn-danger rouded-2" onclick="deleteToDo(${i})">Delete</button>
        </p>`

        document.getElementById("displayArea").innerHTML += todoList
    }
}

function addToLocalStorage() {
    localStorage.setItem('task', JSON.stringify(todoArray))
}

function clearTodoList() {
    const confirmOption = confirm("Are you sure you want to delete all tasks?")
    if (confirmOption) {
        todoArray.splice(0, todoArray.length)
        addToLocalStorage()
        displayTodo()
    }
}