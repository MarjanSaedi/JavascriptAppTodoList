const input = document.getElementById('input');
const addbtn = document.querySelector('#add');
const todoList = document.querySelector('.todo-ul');

const deleteHandler = (e)=>{
    const li = e.target.parentElement;
    todoList.removeChild(li);
}

const checkBoxHandler = (e)=>{
    const checkBox = e.target;
    const label = checkBox.nextElementSibling;
    label.classList.toggle('checked');
}

const addtodo = ()=>{
    const text = input.value;
    if (text==='') {
        alert('Please enter a todo');
        return;
    }
    //create element
    const li = document.createElement('li');
    li.classList.add('todo-li');
    const checkBox = document.createElement('input');
    checkBox.type="checkbox";
    const label = document.createElement('label');
    label.innerText = text;
    label.setAttribute('for',text);
    const del = document.createElement('button');
    del.innerText="Delete";

    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(del);

    todoList.appendChild(li);
    input.value = '';

    del.addEventListener('click', deleteHandler);
    checkBox.addEventListener('click', checkBoxHandler);

}

const inputEnterHandler = (e)=>{
    if (e.keyCode === 13){
        addtodo();
    }
}


//add event listener to button
addbtn.addEventListener('click', addtodo);
input.addEventListener('keydown', inputEnterHandler);