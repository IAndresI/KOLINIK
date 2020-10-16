"use strict";
import tabs from './tabs';
import selectStyler from './selectStyler';
import slider from './slider';
import runningNumbers from './runningNumbers';

document.addEventListener("DOMContentLoaded", function () {

  runningNumbers({
    parent: document.querySelectorAll(".statistic__counter")[0],
    prefix: "K",
    speed: 3,
    addElementsToScroll: 10,
    gradually: true
  });
  runningNumbers({
    parent: document.querySelectorAll(".statistic__counter")[1],
    prefix: "K",
    speed: 3,
    addElementsToScroll: 10,
    gradually: true
  });
  runningNumbers({
    parent: document.querySelectorAll(".statistic__counter")[2],
    speed: 3,
    addElementsToScroll: 10,
    gradually: true
  });
  runningNumbers({
    parent: document.querySelectorAll(".statistic__counter")[3],
    prefix: "K",
    speed: 3,
    addElementsToScroll: 10,
    gradually: true
  });

  selectStyler({
    select: document.querySelector(".appointment__input"),
    placeholder: "Select Department"
  });
  selectStyler({
    select: document.querySelectorAll(".appointment__input")[1],
    placeholder: "Select Doctor"
  });

  slider({
    sliderItem: ".review__item",
    slidesToShow: 2,
    speed: 1000,
    dots: false,
    responsive: [{
      breakPoint: 1100,
      slidesToShow: 1
    }]
  });


  let burgerButton = document.querySelector(".header__burger"),
    menu = document.querySelector(".header__nav-list");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("header__burger--active");
    menu.classList.toggle("header__nav-list--active");
  });

  slider({
    sliderItem: ".department__button-item",
    speed: 1000,
    slidesToShow: document.querySelectorAll(".department__button-item").length,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
        breakPoint: 992,
        slidesToShow: 3,
      },
      {
        breakPoint: 640,
        slidesToShow: 2,
      },
      {
        breakPoint: 420,
        slidesToShow: 1,
      }
    ]
  });

  tabs({
    button: ".department__button",
    content: ".department__item",
    activeClass: ".department__button--active",
    animate: true,
    tabToShow: 0
  });
});