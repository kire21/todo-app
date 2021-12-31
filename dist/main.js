/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/closeModalProjectTodos.js":
/*!***************************************!*\
  !*** ./src/closeModalProjectTodos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const closeModalProjectTodos = () => {
  const modal = document.querySelector('.modal__project--todos');
  const overlay = document.querySelector('.overlay');

  const btnCloseModal = document.querySelector('.close__modal--todos');

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  return {
    closeModal,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModalProjectTodos);


/***/ }),

/***/ "./src/collapsibleNav.js":
/*!*******************************!*\
  !*** ./src/collapsibleNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./src/dashboard.js");
/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week.js */ "./src/week.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





const collapsibleNav = () => {
  const collapsible = document.querySelector('.collapsible');

  collapsible.addEventListener('click', function () {
    collapsible.classList.toggle('collapsible--expanded');
  });

  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.innerHTML.toLowerCase() === 'dashboard') {
        (0,_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
      if (e.target.innerHTML.toLowerCase() === 'today') {
        (0,_today_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
      if (e.target.innerHTML.toLowerCase() === 'week') {
        (0,_week_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
      if (e.target.innerHTML.toLowerCase() === 'projects') {
        (0,_project_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
    });
  });
};

function setActiveButton(navItem) {
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((navItem) => {
    if (navItem !== this) {
      navItem.classList.remove('active');
    }
  });

  navItem.classList.add('active');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collapsibleNav);


/***/ }),

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


const content = document.querySelector('.content');

const LOCAL_STORAGE_PROJECT_KEY = 'project.projectsArr';

let projectsArr =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

const renderDashboard = () => {
  const projects = document.createElement('div');
  projects.classList.add('grid');
  clear(projects);
  if (projectsArr.length === 0) {
    content.textContent = 'No projects';
  }
  projectsArr.forEach((project) => {
    const html = `
    <div class='project__card'>
    <h3>Title: ${project.title}</h3>
      <p>Description: ${project.description}</p>
      <button class='btn btn__view--todos' id='${project.id}''>View Todos</button>
      <button class='btn btn__delete--project' id='${project.id}''>Delete project</button>
    </div>

  `;
    projects.insertAdjacentHTML('afterbegin', html);
  });

  return projects;
};

const loadDashboard = function () {
  const main = document.querySelector('.content');
  clear(main);
  main.appendChild(renderDashboard());
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

const clear = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDashboard);


/***/ }),

/***/ "./src/modalProjects.js":
/*!******************************!*\
  !*** ./src/modalProjects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const showModalProjects = () => {
  const modal = document.querySelector('.modal__projects');
  const overlay = document.querySelector('.overlay');

  const btnCloseModal = document.querySelector('.close__modal--project');
  const btnOpenModal = document.querySelector('.btn__new--project');

  const inputProjectTitle = document.querySelector('.input__project--title');
  const inputProjectDescription = document.querySelector(
    '.input__project--description'
  );

  const openModal = function () {
    inputProjectDescription.value = '';
    inputProjectTitle.value = '';
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  btnOpenModal.addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  return {
    openModal,
    closeModal,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModalProjects);


/***/ }),

/***/ "./src/modalTodos.js":
/*!***************************!*\
  !*** ./src/modalTodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showModal = () => {
  const modal = document.querySelector('.modal__todos');
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('form');

  const btnCloseModal = document.querySelector('.close__modal');
  const btnOpenModal = document.querySelector('.btn__new--todo');

  const openModal = function () {
    form.reset();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  btnOpenModal.addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  return {
    openModal,
    closeModal,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const btnAddProject = document.querySelector('.btn__add--project');
const content = document.querySelector('.content');
const todos = document.querySelector('.todos');
const taskTemplate = document.getElementById('task-template');

const newTaskForm = document.querySelector('[data-new-task-form');
const newTaskInput = document.querySelector('[data-new-task-input');

const LOCAL_STORAGE_PROJECT_KEY = 'project.projectsArr';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'project.selectedProjectId';

let projectsArr =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

class Projects {
  constructor(title, description, id, todos) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.todos = todos;
  }
}

// Add new project
const addProject = (title, description, id, todos) => {
  const newProject = new Projects(title, description, id, todos);
  projectsArr.push(newProject);
  loadProjects();
};

const addNewProject = function (e) {
  e.preventDefault();

  const inputProjectTitle = document.querySelector('.input__project--title');
  const inputProjectDescription = document.querySelector(
    '.input__project--description'
  );

  const modal = document.querySelector('.modal__projects');
  const overlay = document.querySelector('.overlay');

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  const title = inputProjectTitle.value;
  const description = inputProjectDescription.value;
  const id = Date.now().toString();
  const todos = [];

  if (title === '' || description === '') {
    alert('Please, fill the empty field!');
    return;
  }

  addProject(title, description, id, todos);
  closeModal();
};

//  Select project
const selectProjects = function (e) {
  e.preventDefault();
  const currentTargetProject = e.target.id;
  if (e.target.classList[1] === 'btn__view--todos') {
    selectedProjectId = e.target.id;
    renderProjectTodos(currentTargetProject);
  }
  if (e.target.classList[1] === 'btn__delete--project') {
    selectedProjectId = e.target.id;
    deleteProject(currentTargetProject);
  }
  if (e.target.classList[1] === 'create') {
    selectedProjectId = e.target.id;
    newTask(currentTargetProject);
  }
};

// Delete project
const deleteProject = function () {
  projectsArr = projectsArr.filter(
    (project) => project.id !== selectedProjectId
  );
  selectedProjectId = null;
  save();
  loadProjects();
};

// Save project in local storage
const save = function () {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectsArr));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
};

// Render projects
const renderProjects = () => {
  save();
  const projects = document.createElement('div');
  projects.classList.add('grid');
  projects.innerHTML = '';
  if (projectsArr.length === 0) {
    content.textContent = 'No projects';
  }
  projectsArr.forEach((project) => {
    const html = `
    <div class='project__card'>
    <h3>Title: ${project.title}</h3>
      <p>Description: ${project.description}</p>
      <button class='btn btn__view--todos' id='${project.id}''>View Todos</button>
      <button class='btn btn__delete--project' id='${project.id}''>Delete project</button>
    </div>
      
  `;
    projects.insertAdjacentHTML('afterbegin', html);
  });

  return projects;
};

const renderProjectTodos = function () {
  const projectName = document.querySelector('.project__name');
  const selectedProject = projectsArr.find(
    (project) => project.id === selectedProjectId
  );

  if (selectedProjectId == null) return;
  if (selectedProjectId) {
    renderProjectTodosModal(selectedProject);
    projectName.textContent = selectedProject.title;
    renderTasksCount(selectedProject);
    clear(todos);
    renderTodos(selectedProject);
  }
};

const renderProjectTodosModal = function () {
  const modal = document.querySelector('.modal__project--todos');
  const overlay = document.querySelector('.overlay');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const renderTasksCount = function (selectedProject) {
  const listCountElement = document.querySelector('.list__count--element');
  const incompleteTasksCount = selectedProject.todos.filter(
    (todo) => !todo.complete
  ).length;
  const taskString = incompleteTasksCount === 1 ? 'task' : 'tasks';
  listCountElement.textContent = `${incompleteTasksCount} ${taskString} remaining`;
};

const renderTodos = function (selectedProject) {
  const btnCreateTask = document.querySelector('.btn__create--task');
  btnCreateTask.setAttribute('id', selectedProject.id);
  selectedProject.todos.forEach((todo) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    const label = taskElement.querySelector('label');
    label.htmlFor = todo.id;
    label.append(todo.name);
    todos.appendChild(taskElement);
  });
};

const newTask = function () {
  const taskName = newTaskInput.value;
  if (taskName === null || taskName === '') return;
  const task = createTask(taskName);
  newTaskInput.value = '';
  const selectedProject = projectsArr.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos.push(task);
  save();
  renderProjectTodos();
};

function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false };
}

todos.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedProject = projectsArr.find(
      (project) => project.id === selectedProjectId
    );
    const selectedTask = selectedProject.todos.find(
      (todo) => todo.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTasksCount(selectedProject);
  }
});

const loadProjects = () => {
  const main = document.querySelector('.content');
  clear(main);

  main.appendChild(renderProjects());
};

const clear = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

btnAddProject.addEventListener('click', addNewProject);
content.addEventListener('click', selectProjects);
newTaskForm.addEventListener('click', selectProjects);
newTaskForm.addEventListener('submit', newTask);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);


/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTodayTodos);


/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderWeekTodos = () => {
  const todos = document.createElement('h1');
  todos.textContent = 'Week Todos';

  return todos;
};

const loadWeekTodos = () => {
  const main = document.querySelector('.content');
  main.textContent = '';

  main.appendChild(renderWeekTodos());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWeekTodos);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalTodos.js */ "./src/modalTodos.js");
/* harmony import */ var _collapsibleNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapsibleNav.js */ "./src/collapsibleNav.js");
/* harmony import */ var _modalProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalProjects */ "./src/modalProjects.js");
/* harmony import */ var _closeModalProjectTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closeModalProjectTodos.js */ "./src/closeModalProjectTodos.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard */ "./src/dashboard.js");






(0,_dashboard__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modalTodos_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_collapsibleNav_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modalProjects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_closeModalProjectTodos_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO0FBQzVELHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCLEVBQUUsWUFBWTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9OZjs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVztBQUM3QiwwQkFBMEIsaUJBQWlCO0FBQzNDLG1CQUFtQixVQUFVO0FBQzdCLG9EQUFvRCxRQUFRO0FBQzVELG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RMOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDZDdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1M7QUFDRDtBQUNpQjtBQUN6Qjs7QUFFeEMsc0RBQWE7QUFDYiwwREFBUztBQUNULDhEQUFjO0FBQ2QsMERBQWlCO0FBQ2pCLHNFQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Nsb3NlTW9kYWxQcm9qZWN0VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29sbGFwc2libGVOYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGFsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kYWxUb2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNsb3NlTW9kYWxQcm9qZWN0VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19wcm9qZWN0LS10b2RvcycpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcblxuICBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlX19tb2RhbC0tdG9kb3MnKTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiAhbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZU1vZGFsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VNb2RhbFByb2plY3RUb2RvcztcbiIsImltcG9ydCBsb2FkVG9kYXlUb2RvcyBmcm9tICcuL3RvZGF5LmpzJztcbmltcG9ydCBsb2FkRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkJztcbmltcG9ydCBsb2FkV2Vla1RvZG9zIGZyb20gJy4vd2Vlay5qcyc7XG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmNvbnN0IGNvbGxhcHNpYmxlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBjb2xsYXBzaWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzaWJsZScpO1xuXG4gIGNvbGxhcHNpYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNpYmxlLS1leHBhbmRlZCcpO1xuICB9KTtcblxuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW0nKTtcblxuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgICAgIGxvYWREYXNoYm9hcmQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09PSAndG9kYXknKSB7XG4gICAgICAgIGxvYWRUb2RheVRvZG9zKCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSA9PT0gJ3dlZWsnKSB7XG4gICAgICAgIGxvYWRXZWVrVG9kb3MoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09PSAncHJvamVjdHMnKSB7XG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKG5hdkl0ZW0pIHtcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyk7XG5cbiAgbmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xuICAgIGlmIChuYXZJdGVtICE9PSB0aGlzKSB7XG4gICAgICBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29sbGFwc2libGVOYXY7XG4iLCJpbXBvcnQgbG9hZFByb2plY3RzIGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gJ3Byb2plY3QucHJvamVjdHNBcnInO1xuXG5sZXQgcHJvamVjdHNBcnIgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcblxuY29uc3QgcmVuZGVyRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gIGNsZWFyKHByb2plY3RzKTtcbiAgaWYgKHByb2plY3RzQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnTm8gcHJvamVjdHMnO1xuICB9XG4gIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9J3Byb2plY3RfX2NhcmQnPlxuICAgIDxoMz5UaXRsZTogJHtwcm9qZWN0LnRpdGxlfTwvaDM+XG4gICAgICA8cD5EZXNjcmlwdGlvbjogJHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG5fX3ZpZXctLXRvZG9zJyBpZD0nJHtwcm9qZWN0LmlkfScnPlZpZXcgVG9kb3M8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG5fX2RlbGV0ZS0tcHJvamVjdCcgaWQ9JyR7cHJvamVjdC5pZH0nJz5EZWxldGUgcHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIGA7XG4gICAgcHJvamVjdHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0cztcbn07XG5cbmNvbnN0IGxvYWREYXNoYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjbGVhcihtYWluKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJEYXNoYm9hcmQoKSk7XG4gIGxvYWRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkRGFzaGJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzaG93TW9kYWxQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3Byb2plY3RzJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuXG4gIGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX21vZGFsLS1wcm9qZWN0Jyk7XG4gIGNvbnN0IGJ0bk9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX25ldy0tcHJvamVjdCcpO1xuXG4gIGNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0X19wcm9qZWN0LS10aXRsZScpO1xuICBjb25zdCBpbnB1dFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5pbnB1dF9fcHJvamVjdC0tZGVzY3JpcHRpb24nXG4gICk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGlucHV0UHJvamVjdERlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgaW5wdXRQcm9qZWN0VGl0bGUudmFsdWUgPSAnJztcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmICFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBidG5PcGVuTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuICBidG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuICByZXR1cm4ge1xuICAgIG9wZW5Nb2RhbCxcbiAgICBjbG9zZU1vZGFsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd01vZGFsUHJvamVjdHM7XG4iLCJjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX190b2RvcycpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlX19tb2RhbCcpO1xuICBjb25zdCBidG5PcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19uZXctLXRvZG8nKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgIW1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ0bk9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG4gIGJ0bkNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG4gIHJldHVybiB7XG4gICAgb3Blbk1vZGFsLFxuICAgIGNsb3NlTW9kYWwsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93TW9kYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19hZGQtLXByb2plY3QnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRlbXBsYXRlJyk7XG5cbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2stZm9ybScpO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2staW5wdXQnKTtcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9ICdwcm9qZWN0LnByb2plY3RzQXJyJztcbmNvbnN0IExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVkgPSAncHJvamVjdC5zZWxlY3RlZFByb2plY3RJZCc7XG5cbmxldCBwcm9qZWN0c0FyciA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSkpIHx8IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcbik7XG5cbmNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpZCwgdG9kb3MpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gIH1cbn1cblxuLy8gQWRkIG5ldyBwcm9qZWN0XG5jb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQsIHRvZG9zKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUsIGRlc2NyaXB0aW9uLCBpZCwgdG9kb3MpO1xuICBwcm9qZWN0c0Fyci5wdXNoKG5ld1Byb2plY3QpO1xuICBsb2FkUHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IGFkZE5ld1Byb2plY3QgPSBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgaW5wdXRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfX3Byb2plY3QtLXRpdGxlJyk7XG4gIGNvbnN0IGlucHV0UHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmlucHV0X19wcm9qZWN0LS1kZXNjcmlwdGlvbidcbiAgKTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcHJvamVjdHMnKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRQcm9qZWN0VGl0bGUudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRQcm9qZWN0RGVzY3JpcHRpb24udmFsdWU7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIGlmICh0aXRsZSA9PT0gJycgfHwgZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSwgZmlsbCB0aGUgZW1wdHkgZmllbGQhJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGlkLCB0b2Rvcyk7XG4gIGNsb3NlTW9kYWwoKTtcbn07XG5cbi8vICBTZWxlY3QgcHJvamVjdFxuY29uc3Qgc2VsZWN0UHJvamVjdHMgPSBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGN1cnJlbnRUYXJnZXRQcm9qZWN0ID0gZS50YXJnZXQuaWQ7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT09ICdidG5fX3ZpZXctLXRvZG9zJykge1xuICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuaWQ7XG4gICAgcmVuZGVyUHJvamVjdFRvZG9zKGN1cnJlbnRUYXJnZXRQcm9qZWN0KTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09PSAnYnRuX19kZWxldGUtLXByb2plY3QnKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5pZDtcbiAgICBkZWxldGVQcm9qZWN0KGN1cnJlbnRUYXJnZXRQcm9qZWN0KTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09PSAnY3JlYXRlJykge1xuICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuaWQ7XG4gICAgbmV3VGFzayhjdXJyZW50VGFyZ2V0UHJvamVjdCk7XG4gIH1cbn07XG5cbi8vIERlbGV0ZSBwcm9qZWN0XG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBwcm9qZWN0c0FyciA9IHByb2plY3RzQXJyLmZpbHRlcihcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWRQcm9qZWN0SWRcbiAgKTtcbiAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xuICBzYXZlKCk7XG4gIGxvYWRQcm9qZWN0cygpO1xufTtcblxuLy8gU2F2ZSBwcm9qZWN0IGluIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IHNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVksXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWRcbiAgKTtcbn07XG5cbi8vIFJlbmRlciBwcm9qZWN0c1xuY29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gIHNhdmUoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICBwcm9qZWN0cy5pbm5lckhUTUwgPSAnJztcbiAgaWYgKHByb2plY3RzQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnTm8gcHJvamVjdHMnO1xuICB9XG4gIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9J3Byb2plY3RfX2NhcmQnPlxuICAgIDxoMz5UaXRsZTogJHtwcm9qZWN0LnRpdGxlfTwvaDM+XG4gICAgICA8cD5EZXNjcmlwdGlvbjogJHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG5fX3ZpZXctLXRvZG9zJyBpZD0nJHtwcm9qZWN0LmlkfScnPlZpZXcgVG9kb3M8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG5fX2RlbGV0ZS0tcHJvamVjdCcgaWQ9JyR7cHJvamVjdC5pZH0nJz5EZWxldGUgcHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgICAgXG4gIGA7XG4gICAgcHJvamVjdHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0cztcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RUb2RvcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmFtZScpO1xuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0c0Fyci5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxuICApO1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PSBudWxsKSByZXR1cm47XG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCkge1xuICAgIHJlbmRlclByb2plY3RUb2Rvc01vZGFsKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3QudGl0bGU7XG4gICAgcmVuZGVyVGFza3NDb3VudChzZWxlY3RlZFByb2plY3QpO1xuICAgIGNsZWFyKHRvZG9zKTtcbiAgICByZW5kZXJUb2RvcyhzZWxlY3RlZFByb2plY3QpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJQcm9qZWN0VG9kb3NNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3Byb2plY3QtLXRvZG9zJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tzQ291bnQgPSBmdW5jdGlvbiAoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIGNvbnN0IGxpc3RDb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9fY291bnQtLWVsZW1lbnQnKTtcbiAgY29uc3QgaW5jb21wbGV0ZVRhc2tzQ291bnQgPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmlsdGVyKFxuICAgICh0b2RvKSA9PiAhdG9kby5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza1N0cmluZyA9IGluY29tcGxldGVUYXNrc0NvdW50ID09PSAxID8gJ3Rhc2snIDogJ3Rhc2tzJztcbiAgbGlzdENvdW50RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2luY29tcGxldGVUYXNrc0NvdW50fSAke3Rhc2tTdHJpbmd9IHJlbWFpbmluZ2A7XG59O1xuXG5jb25zdCByZW5kZXJUb2RvcyA9IGZ1bmN0aW9uIChzZWxlY3RlZFByb2plY3QpIHtcbiAgY29uc3QgYnRuQ3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2NyZWF0ZS0tdGFzaycpO1xuICBidG5DcmVhdGVUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxlY3RlZFByb2plY3QuaWQpO1xuICBzZWxlY3RlZFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LmlkID0gdG9kby5pZDtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcbiAgICBjb25zdCBsYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRvZG8uaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRvZG8ubmFtZSk7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IG5ld1Rhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gbmV3VGFza0lucHV0LnZhbHVlO1xuICBpZiAodGFza05hbWUgPT09IG51bGwgfHwgdGFza05hbWUgPT09ICcnKSByZXR1cm47XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lKTtcbiAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzQXJyLmZpbmQoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICk7XG4gIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5wdXNoKHRhc2spO1xuICBzYXZlKCk7XG4gIHJlbmRlclByb2plY3RUb2RvcygpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lKSB7XG4gIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IG5hbWUsIGNvbXBsZXRlOiBmYWxzZSB9O1xufVxuXG50b2Rvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0c0Fyci5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmluZChcbiAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSBlLnRhcmdldC5pZFxuICAgICk7XG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBzYXZlKCk7XG4gICAgcmVuZGVyVGFza3NDb3VudChzZWxlY3RlZFByb2plY3QpO1xuICB9XG59KTtcblxuY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY2xlYXIobWFpbik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJQcm9qZWN0cygpKTtcbn07XG5cbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpO1xuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByb2plY3RzKTtcbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJvamVjdHMpO1xubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbmV3VGFzayk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2FkZC0tdG9kbycpO1xuY29uc3QgYnRuRWRpdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19lZGl0LS10b2RvJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9UT0RPX0tFWSA9ICd0b2Rvcy50b2Rvc0Fycic7XG5jb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1RPRE9fSURfS0VZID0gJ3RvZG9zLnNlbGVjdGVkVG9kb0lkJztcblxubGV0IHRvZG9zQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1RPRE9fS0VZKSkgfHwgW107XG5cbmxldCBzZWxlY3RlZFRvZG9JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfVE9ET19JRF9LRVkpO1xuXG5jbGFzcyBUb2RvcyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG59XG5cbmNvbnN0IGFkZFRvZG9zID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaWQpID0+IHtcbiAgY29uc3QgbmV3VG9kb3MgPSBuZXcgVG9kb3ModGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBpZCk7XG4gIHRvZG9zQXJyLnB1c2gobmV3VG9kb3MpO1xuICBsb2FkVG9kYXlUb2RvcygpO1xufTtcblxuY29uc3QgYWRkTmV3VG9kbyA9IGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBpbnB1dFRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9fdG9kby0tdGl0bGUnKTtcbiAgY29uc3QgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuaW5wdXRfX3RvZG8tLWRlc2NyaXB0aW9uJ1xuICApO1xuICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9fdG9kby0tZGF0ZScpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX190b2RvcycpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcblxuICBjb25zdCB0aXRsZSA9IGlucHV0VG9kb1RpdGxlLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlO1xuICBjb25zdCBkYXRlID0gdG9kb0RhdGUudmFsdWU7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfTtcblxuICBpZiAodGl0bGUgPT09ICcnIHx8IGRlc2NyaXB0aW9uID09PSAnJyB8fCBkYXRlID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UsIGZpbGwgdGhlIGVtcHR5IGZpZWxkIScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFkZFRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaWQpO1xuICBjbG9zZU1vZGFsKCk7XG59O1xuXG5jb25zdCBzZWxlY3RUb2RvcyA9IGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICBjb25zdCBjdXJyZW50VGFyZ2V0VG9kbyA9IGUudGFyZ2V0LmlkO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09PSAnYnRuX19kZWxldGUtLXRvZG8nKSB7XG4gICAgc2VsZWN0ZWRUb2RvSWQgPSBlLnRhcmdldC5pZDtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRUYXJnZXRUb2RvKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09PSAnYnRuX191cGRhdGUtLXRvZG8nKSB7XG4gICAgc2VsZWN0ZWRUb2RvSWQgPSBlLnRhcmdldC5pZDtcbiAgICB1cGRhdGVUb2RvKGN1cnJlbnRUYXJnZXRUb2RvKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlVG9kbyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5wdXRUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQtLXRpdGxlJyk7XG4gIGNvbnN0IGlucHV0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmVkaXRfX2lucHV0LS1kZXNjcmlwdGlvbidcbiAgKTtcbiAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdF9faW5wdXQtLWRhdGUnKTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZWRpdC0tdG9kbycpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGNvbnN0IHNlbGVjdGVkVG9kbyA9IHRvZG9zQXJyLmZpbmQoKFRvZG8pID0+IFRvZG8uaWQgPT09IHNlbGVjdGVkVG9kb0lkKTtcblxuICBpbnB1dFRvZG9UaXRsZS52YWx1ZSA9IHNlbGVjdGVkVG9kby50aXRsZTtcbiAgaW5wdXRUb2RvRGVzY3JpcHRpb24udmFsdWUgPSBzZWxlY3RlZFRvZG8uZGVzY3JpcHRpb247XG4gIHRvZG9EYXRlLnZhbHVlID0gc2VsZWN0ZWRUb2RvLmRhdGU7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRvZG8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MudG9kb3NBcnInKTtcbiAgbGV0IHRvZG9PYmogPSBKU09OLnBhcnNlKHRvZG8pO1xuXG4gIGxldCB0b2RvT2JqSW5kZXggPSB0b2RvT2JqLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gc2VsZWN0ZWRUb2RvSWQpO1xuXG4gIGNvbnN0IGlucHV0VG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRfX2lucHV0LS10aXRsZScpO1xuICBjb25zdCBpbnB1dFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5lZGl0X19pbnB1dC0tZGVzY3JpcHRpb24nXG4gICk7XG4gIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRfX2lucHV0LS1kYXRlJyk7XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRvZG9PYmopKSB7XG4gICAgY29uc29sZS5sb2coMCA9PSBrZXkpO1xuICAgIGlmICh0b2RvT2JqSW5kZXggPT0ga2V5KSB7XG4gICAgICB2YWx1ZS50aXRsZSA9IGlucHV0VG9kb1RpdGxlLnZhbHVlO1xuICAgICAgdmFsdWUuZGVzY3JpcHRpb24gPSBpbnB1dFRvZG9EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIHZhbHVlLmRhdGUgPSB0b2RvRGF0ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZWRpdC0tdG9kbycpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH07XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zLnRvZG9zQXJyJywgSlNPTi5zdHJpbmdpZnkodG9kb09iaikpO1xuXG4gIGNsb3NlTW9kYWwoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gIGlmICh0b2RvSWQpIHtcbiAgICB0b2Rvc0FyciA9IHRvZG9zQXJyLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gdG9kb0lkKTtcbiAgICAvLyByZW5kZXJUb2RvcygpO1xuICAgIGxvYWRUb2RheVRvZG9zKCk7XG4gIH1cbn07XG5cbmNvbnN0IHNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfVE9ET19LRVksIEpTT04uc3RyaW5naWZ5KHRvZG9zQXJyKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfVE9ET19JRF9LRVksIHNlbGVjdGVkVG9kb0lkKTtcbn07XG5cbmNvbnN0IHJlbmRlclRvZG9zID0gKCkgPT4ge1xuICBzYXZlKCk7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9zLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgdG9kb3MuaW5uZXJIVE1MID0gJyc7XG4gIGlmICh0b2Rvc0Fyci5sZW5ndGggPT09IDApIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ05vIHRvZG9zJztcbiAgfVxuICB0b2Rvc0Fyci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBpZiAodG9kby5kYXRlID09PSB0b2RheURhdGUpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPSd0b2RvX19jYXJkJz5cbiAgICAgIDxoMz5Ub2RvOiAke3RvZG8udGl0bGV9PC9oMz5cbiAgICAgICAgPHA+RGVzY3JpcHRpb246ICR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwPkRhdGU6ICR7dG9kby5kYXRlfTwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bl9fZGVsZXRlLS10b2RvJyBpZD0nJHt0b2RvLmlkfScnPkRlbGV0ZSB0b2RvPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG5fX3VwZGF0ZS0tdG9kbycgaWQ9JyR7dG9kby5pZH0nJz5VcGRhdGUgVG9kbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICB0b2Rvcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmNvbnN0IGxvYWRUb2RheVRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyVG9kb3MoKSk7XG59O1xuXG5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3VG9kbyk7XG5idG5FZGl0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RUb2Rvcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUb2RheVRvZG9zO1xuIiwiY29uc3QgcmVuZGVyV2Vla1RvZG9zID0gKCkgPT4ge1xuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRvZG9zLnRleHRDb250ZW50ID0gJ1dlZWsgVG9kb3MnO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmNvbnN0IGxvYWRXZWVrVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJXZWVrVG9kb3MoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkV2Vla1RvZG9zO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2hvd01vZGFsIGZyb20gJy4vbW9kYWxUb2Rvcy5qcyc7XG5pbXBvcnQgY29sbGFwc2libGVOYXYgZnJvbSAnLi9jb2xsYXBzaWJsZU5hdi5qcyc7XG5pbXBvcnQgc2hvd01vZGFsUHJvamVjdHMgZnJvbSAnLi9tb2RhbFByb2plY3RzJztcbmltcG9ydCBjbG9zZU1vZGFsUHJvamVjdFRvZG9zIGZyb20gJy4vY2xvc2VNb2RhbFByb2plY3RUb2Rvcy5qcyc7XG5pbXBvcnQgbG9hZERhc2hib2FyZCBmcm9tICcuL2Rhc2hib2FyZCc7XG5cbmxvYWREYXNoYm9hcmQoKTtcbnNob3dNb2RhbCgpO1xuY29sbGFwc2libGVOYXYoKTtcbnNob3dNb2RhbFByb2plY3RzKCk7XG5jbG9zZU1vZGFsUHJvamVjdFRvZG9zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=