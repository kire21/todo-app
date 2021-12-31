import loadTodayTodos from './today.js';
import loadDashboard from './dashboard';
import loadWeekTodos from './week.js';
import loadProjects from './project.js';

const collapsibleNav = () => {
  const collapsible = document.querySelector('.collapsible');

  collapsible.addEventListener('click', function () {
    collapsible.classList.toggle('collapsible--expanded');
  });

  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.innerHTML.toLowerCase() === 'dashboard') {
        loadDashboard();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
      if (e.target.innerHTML.toLowerCase() === 'today') {
        loadTodayTodos();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
      if (e.target.innerHTML.toLowerCase() === 'week') {
        loadWeekTodos();
        if (e.target.classList.contains('active')) return;
        setActiveButton(item);
      }
      if (e.target.innerHTML.toLowerCase() === 'projects') {
        loadProjects();
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

export default collapsibleNav;
