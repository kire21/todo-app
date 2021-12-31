'use strict';

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

export default closeModalProjectTodos;
