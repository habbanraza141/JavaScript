
const input = document.querySelector('#todo');
const ul = document.querySelector('ul');

function addTodo(){
    if(input.value.trim() === ''){
        console.log('enter value');
    }else{
        const li = document.createElement('LI');
        const text = document.createTextNode(input.value);

        const deleteBtn = document.createElement('BUTTON');
        const editBtn = document.createElement('BUTTON');
        const delText = document.createTextNode('Delete');
        const editText = document.createTextNode('Edit');

        deleteBtn.setAttribute('onclick' , 'deleteTodo(this)');
        editBtn.setAttribute('onclick' , 'editTodo(this)');

        deleteBtn.appendChild(delText);
        editBtn.appendChild(editText);
        li.appendChild(text);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
    }
   
    input.value = ''
}





function deleteTodo(element){
    ul.removeChild(element.parentNode);
}


function editTodo(element){
    const li2 = document.createElement('LI');
    const text2 = document.createTextNode(prompt("Enter new text"));

    const deleteBtn2 = document.createElement('BUTTON');
    const editBtn2 = document.createElement('BUTTON');
    const delText2 = document.createTextNode('Delete');
    const editText2 = document.createTextNode('Edit');

    deleteBtn2.setAttribute('onclick' , 'deleteTodo(this)');
    editBtn2.setAttribute('onclick' , 'editTodo(this)');

    deleteBtn2.appendChild(delText2);
    editBtn2.appendChild(editText2);

    li2.appendChild(text2)
    li2.appendChild(deleteBtn2);
    li2.appendChild(editBtn2);
    ul.replaceChild(li2, element.parentNode);

}