const todoForm = document.querySelector('#todo');
const ul = document.querySelector('#ul');

function addTodo() {
    console.log(todoForm.value);
    ul.innerHTML += `<li>${todo.value}
    <button>Edit</button>
    <button onclick="emptyString()">Delete</button>
    </li>`;
}

function emptyString() {
    ul.innerHTML = ""
}