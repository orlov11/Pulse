$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/PrevArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/nextArrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
            },
        }
        ]
    });
  });