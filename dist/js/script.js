window.addEventListener('DOMContentLoaded', () => {

    // Mobile menu
    const menu = document.querySelector('.header__menu-mobile'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('menu_active');
    });

    // Reviews slider
    function sliderReviews() {

        let slideIndex = 0,
            slides = document.querySelectorAll('.reviews__slider-item'),
            prev = document.querySelector('.reviews__arrow-left'),
            next = document.querySelector('.reviews__arrow-right'),
            dots = document.querySelectorAll('.reviews__dots'),
            dotsBtn = document.querySelectorAll('.reviews__dots-btn'),
            dotsWrap = document.querySelector('.reviews__dots-wrap');

        function showSlides(n) {
            if (n > slides.length - 1) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }
            slides.forEach((item) => item.style.display = 'none'); 
            slides[slideIndex].style.display = 'flex';

            dots.forEach((item) => item.classList.remove('slick-active'));
            dots[slideIndex].classList.add('slick-active');
        }

        function currentSlide(i) {
            showSlides(slideIndex = i);
        }

        next.addEventListener('click', () => showSlides(slideIndex += 1));
        prev.addEventListener('click', () => showSlides(slideIndex -= 1));

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length; i++) {
                if (event.target == dotsBtn[i]) {
                    currentSlide(i);
                }
            }
        });

        showSlides(slideIndex);
    }

    sliderReviews();

    // Slick Slider activation (for Clients)

      $('.clients__slider-main').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows :false,
                dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows :false,
                dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows :false,
                dots: true
                }
            }
        ]
      });
});