let btn = document.querySelector('.btn');
let input = document.querySelector('input');
let taskList = document.querySelector('.to-do-list');

btn.addEventListener('click' , ()=>{
    let inputValue = input.value;
    if(inputValue){
        let newLiElement = newElement(inputValue);
        newLiElement.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
        taskList.appendChild(newLiElement);
        input.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    if(e.target.nodeName.toLowerCase() === 'i'){
        e.target.parentElement.parentElement.remove();
    }else if(e.target.nodeName.toLowerCase() === 'li'){
        e.target.classList.toggle('line-through');
    }
});





function newElement(textContent){
    let element = document.createElement('li');
    element.innerHTML = textContent;
    return element;
}

