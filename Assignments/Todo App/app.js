const todoForm = document.querySelector('#todo');
const ul = document.querySelector('#ul');
const arr = [];
function addTodo() {
    ul.innerHTML = ''
    arr.push(todoForm.value)
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `<li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>

        </li>`;
    }
    todo.value = ''
}

function deleteTodo(i) {
    ul.innerHTML = ''
    console.log("jh deleted", arr[i])
    arr.splice(i, 1);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `<li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`;
    }
}

function editTodo(i) {
    ul.innerHTML = ''
    let userVaalue = prompt("Enter new value")
    if (userVaalue === "") {
    } else {
        arr.splice(i, 1, userVaalue);

    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `<li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`;
    }
}


