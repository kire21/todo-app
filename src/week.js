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

export default loadWeekTodos;
