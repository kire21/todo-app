'use strict';

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

export default showModalProjects;
