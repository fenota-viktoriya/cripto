$(document).ready(() => {
  /*
  $('.burger').click(() => {
    $('.menu-overlay').addClass('active');
  });
  $('.menu-overlay__close').click(() => {
    $('.menu-overlay').removeClass('active');
  });*/

  // sliders

  let swiper1_length = document.getElementsByClassName('way__slider').length;
  if (swiper1_length > 0) {
    var swiper1 = new Swiper('.way__slider', {
      watchOverflow: true,
      loop: false,
      speed: 1500,
      spaceBetween: 35,
      slidesPerView: 4,
      slidesPerGroup: 2,
      autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
      },
    });
  }

  let swiper2_length = document.getElementsByClassName('calculator__slider').length;
  if (swiper2_length > 0) {
    var swiper2 = new Swiper('.calculator__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      watchOverflow: true,
      loop: false,
      speed: 500,
      slidesPerView: 5,
      /*autoplay: {
         delay: 3500,
         pauseOnMouseEnter: true,
      },*/
    });
  }

  //range slider
  const
    range = document.getElementById('range'),
    rangeV = document.getElementById('range_value'),
    setValue = () => {
      const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
      rangeV.innerHTML = `<span>${range.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);

  //change period
  $(".calculator__period button").click(function (e) {
    e.preventDefault();
    $(".calculator__period button").removeClass('active');
    $(this).addClass('active');
  })

  //tabs
  $(".tabs .tab").click(function () {
    $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $(".tabs .tab").click(function () {
    $(".tabs .tab_bullet").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_bullet").eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

});