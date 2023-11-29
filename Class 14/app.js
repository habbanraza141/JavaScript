// let nodeToAdd = document.createElement("DIV")
// let para = document.createElement("P")
// let textNode = document.createTextNode("Hello world")
// para.appendChild(textNode)
// nodeToAdd.appendChild(para)
// console.log(nodeToAdd);
// console.log(typeof (nodeToAdd));


// let ul = document.createElement("UL")
// let li1 = document.createElement("LI")
// let textHome = document.createTextNode("Home")
// li1.appendChild(textHome)
// li1.setAttribute("class", "li-one")
// ul.appendChild(li1)
// let li2 = document.createElement("LI")
// let textAbout = document.createTextNode("About")
// li2.appendChild(textAbout)
// li2.setAttribute("class", "li-two")
// ul.appendChild(li2)
// let li3 = document.createElement("LI")
// let textContact = document.createTextNode("Contact")
// li3.appendChild(textContact)
// li3.setAttribute("class", "li-three")
// ul.appendChild(li3)
// console.log(ul);





const input = document.querySelector('#todo');
const ul = document.querySelector('ul')
function addTodo() {
    if (input.value.trim() === '') {
        console.log('enter value');
    } else {
        const li = document.createElement('LI');
        const text = document.createTextNode(input.value);

        const deleteBtn = document.createElement('BUTTON')
        const editBtn = document.createElement('BUTTON')
        const deleteText = document.createTextNode('Delete')
        const editText = document.createTextNode('Edit')

        deleteBtn.setAttribute('onclick', 'deleteTodo()')
        deleteBtn.setAttribute('onclick', 'editTodo()')

        deleteBtn.appendChild(deleteText)
        editBtn.appendChild(editText)
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
    }
    input.value = ''
}