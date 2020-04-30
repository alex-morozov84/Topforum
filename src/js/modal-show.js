window.addEventListener('DOMContentLoaded', () => {

    function showModal(button, overlay, close) {
        button.addEventListener('click', () => overlay.classList.add('show'));
        close.addEventListener('click', () => overlay.classList.remove('show'));
    }

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.modal-subscribe__close'),
        button = document.querySelector('.any__button');

    showModal(button, overlay, close);

    $('#modalForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            company: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите, пожалуйста, свое имя и фамилию",
                minlength: jQuery.validator.format("Длина должна быть не менее {0} символов")
            },
            company: {
                required: "Введите, пожалуйста, свое имя и фамилию",
                minlength: jQuery.validator.format("Длина должна быть не менее {0} символов")
            },
            email: {
                required: "Введите, пожалуйста, свой e-mail",
                email: "Неправильно введен адрес почты"
            }
        }
    })

}); 
