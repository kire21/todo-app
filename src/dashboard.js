import loadProjects from './project.js';

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
  loadProjects();
};

const clear = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export default loadDashboard;
