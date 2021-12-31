'use strict';

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

export default loadProjects;
