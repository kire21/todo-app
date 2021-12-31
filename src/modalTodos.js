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

export default showModal;
