'use strict'

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = []

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    toDoData.forEach(function (item) {
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;
            render()
        });

        li.querySelector('.todo-remove').addEventListener('click', function () {
            const index = toDoData.indexOf(item);
            toDoData.splice(index, 1);
            li.remove();
        });
    });
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputValue = headerInput.value.trim();
    if (!inputValue) {
        return;
    }

    const newToDo = {
        text: headerInput.value,
        completed: false
    }

    toDoData.push(newToDo)
    headerInput.value = ''   //clears input value after submition

    render()
})     //preventDefault prevent page from rebmiting/renewing after submit presssed