// $(document).ready(function(){
//     $('.slider__inner').slick({
//         speed: 1000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="assets/PrevArrow.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="assets/nextArrow.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//             },
//         }
//         ]
//     });
//   });

let slider = tns({
    container: '.slider__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false, 
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });