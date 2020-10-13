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

  tabs({
    button: ".department__button",
    content: ".department__item",
    activeClass: ".department__button--active",
    animate: true,
    tabToShow: 0
  });

  slider({
    slider__item: ".review__item",
    slidesToShow: 2,
    speed: 1000,
    dots: false,
    responsive: [{
      breakPoint: 780,
      slidesToShow: 1
    }]
  });
});