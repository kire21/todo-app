'use strict';

const btnAddTodo = document.querySelector('.btn__add--todo');
const btnEditTodo = document.querySelector('.btn__edit--todo');
const content = document.querySelector('.content');

const LOCAL_STORAGE_TODO_KEY = 'todos.todosArr';
const LOCAL_STORAGE_SELECTED_TODO_ID_KEY = 'todos.selectedTodoId';

let todosArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY)) || [];

let selectedTodoId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TODO_ID_KEY);

class Todos {
  constructor(title, description, date, id) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

const addTodos = (title, description, date, id) => {
  const newTodos = new Todos(title, description, date, id);
  todosArr.push(newTodos);
  loadTodayTodos();
};

const addNewTodo = function (e) {
  e.preventDefault();

  const inputTodoTitle = document.querySelector('.input__todo--title');
  const inputTodoDescription = document.querySelector(
    '.input__todo--description'
  );
  const todoDate = document.querySelector('.input__todo--date');

  const modal = document.querySelector('.modal__todos');
  const overlay = document.querySelector('.overlay');

  const title = inputTodoTitle.value;
  const description = inputTodoDescription.value;
  const date = todoDate.value;
  const id = Date.now().toString();

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  if (title === '' || description === '' || date === '') {
    alert('Please, fill the empty field!');
    return;
  }

  addTodos(title, description, date, id);
  closeModal();
};

const selectTodos = function (e) {
  e.preventDefault();
  console.log(e.target);
  const currentTargetTodo = e.target.id;
  if (e.target.classList[1] === 'btn__delete--todo') {
    selectedTodoId = e.target.id;
    deleteTodo(currentTargetTodo);
  }
  if (e.target.classList[1] === 'btn__update--todo') {
    selectedTodoId = e.target.id;
    updateTodo(currentTargetTodo);
  }
};

const updateTodo = function () {
  const inputTodoTitle = document.querySelector('.edit__input--title');
  const inputTodoDescription = document.querySelector(
    '.edit__input--description'
  );
  const todoDate = document.querySelector('.edit__input--date');

  const modal = document.querySelector('.modal__edit--todo');
  const overlay = document.querySelector('.overlay');

  const form = document.querySelector('form');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  const selectedTodo = todosArr.find((Todo) => Todo.id === selectedTodoId);

  inputTodoTitle.value = selectedTodo.title;
  inputTodoDescription.value = selectedTodo.description;
  todoDate.value = selectedTodo.date;
};

const editTodo = function () {
  let todo = localStorage.getItem('todos.todosArr');
  let todoObj = JSON.parse(todo);

  let todoObjIndex = todoObj.findIndex((todo) => todo.id === selectedTodoId);

  const inputTodoTitle = document.querySelector('.edit__input--title');
  const inputTodoDescription = document.querySelector(
    '.edit__input--description'
  );
  const todoDate = document.querySelector('.edit__input--date');

  for (let [key, value] of Object.entries(todoObj)) {
    console.log(0 == key);
    if (todoObjIndex == key) {
      value.title = inputTodoTitle.value;
      value.description = inputTodoDescription.value;
      value.date = todoDate.value;
    }
  }

  const modal = document.querySelector('.modal__edit--todo');
  const overlay = document.querySelector('.overlay');

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  localStorage.setItem('todos.todosArr', JSON.stringify(todoObj));

  closeModal();
};

const deleteTodo = function (todoId) {
  if (todoId) {
    todosArr = todosArr.filter((todo) => todo.id !== todoId);
    // renderTodos();
    loadTodayTodos();
  }
};

const save = function () {
  localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todosArr));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_TODO_ID_KEY, selectedTodoId);
};

const renderTodos = () => {
  save();
  const todos = document.createElement('div');
  todos.classList.add('grid');
  todos.innerHTML = '';
  if (todosArr.length === 0) {
    content.textContent = 'No todos';
  }
  todosArr.forEach((todo) => {
    const d = new Date();
    let todayDate = d.toISOString().slice(0, 10);

    if (todo.date === todayDate) {
      const html = `
      <div class='todo__card'>
      <h3>Todo: ${todo.title}</h3>
        <p>Description: ${todo.description}</p>
        <p>Date: ${todo.date}</p>
        <button class='btn btn__delete--todo' id='${todo.id}''>Delete todo</button>
        <button class='btn btn__update--todo' id='${todo.id}''>Update Todo</button>
      </div>
        `;
      todos.insertAdjacentHTML('afterbegin', html);
    }
  });

  return todos;
};

const loadTodayTodos = () => {
  const main = document.querySelector('.content');
  main.textContent = '';

  main.appendChild(renderTodos());
};

btnAddTodo.addEventListener('click', addNewTodo);
btnEditTodo.addEventListener('click', editTodo);
content.addEventListener('click', selectTodos);

export default loadTodayTodos;
