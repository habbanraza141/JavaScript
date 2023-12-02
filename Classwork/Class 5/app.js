const h1 = document.querySelector('.head');


function greetUser() {
    if (h1.innerHTML === 'changed through javascript') {
        h1.innerHTML = 'hello world'
    } else {
        h1.innerHTML = 'changed through javascript'
    }
}

greetUser()