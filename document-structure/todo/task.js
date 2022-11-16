const addButton = document.getElementById('tasks__add');
const inputField = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

const addFunction = () => {
    if (inputField.value.trim() != '') {

        let div = document.createElement('div');
        div.className = 'task';
        div.innerHTML = '<div class="task__title">'+ inputField.value + '</div><a href="#" class="task__remove">&times;</a>';
        div.querySelector('.task__remove').addEventListener('click', () => div.remove());
        taskList.insertBefore(div, null);
        inputField.value = '';
    }
};

addButton.addEventListener('click', function (e){
    e.preventDefault();
    addFunction();
});

