document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.backdrop');
    const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
    const modalBtnClose = document.querySelector('.modal-btn-close');

    const toggleModal = () => {
        modal.classList.toggle('is-hidden');
        document.body.classList.toggle('is-scroll-disabled');
    };

    modalBtnOpen.forEach(btn => {
        btn.addEventListener('click', toggleModal);
    });

    if (modalBtnClose) {
        modalBtnClose.addEventListener('click', toggleModal);
    }
});