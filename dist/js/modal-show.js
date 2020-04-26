window.addEventListener('DOMContentLoaded', () => {

    function showModal(button, overlay, close) {
        button.addEventListener('click', () => overlay.classList.add('show'));
        close.addEventListener('click', () => overlay.classList.remove('show'));
    }

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.modal-subscribe__close'),
        button = document.querySelector('.any__button');

    showModal(button, overlay, close);

}); 