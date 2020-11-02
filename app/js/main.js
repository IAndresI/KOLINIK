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

  slider({
    sliderItem: ".provide__slider-item",
    slidesToShow: 1,
    speed: 1000,
    dots: false,
    sliderButtonNext: ".provide__button--next",
    sliderButtonPrev: ".provide__button"
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

  tabs({
    button: ".aside__button--tab",
    content: ".details__content",
    activeClass: ".aside__button--active",
    tabToShow: 0,
    noContentAlert: ".details__nocontent"
  });

  tabs({
    button: ".aside__button--tab",
    content: ".profile__content",
    activeClass: ".aside__button--active",
    tabToShow: 0,
    noContentAlert: ".details__nocontent"
  });

  tabs({
    button: ".privacy__button",
    content: ".privacy__description",
    activeClass: ".privacy__button--active",
    tabToShow: 0,
    animate: true
  });

  let videoButton = document.querySelector(".theatre__button"),
    closeButton = document.querySelector(".popup__button"),
    popup = document.querySelector(".popup"),
    popupVideo = document.querySelector(".popup__video");
  if (popupVideo) {
    let popupVideoSrc = popupVideo.getAttribute("src"),
      marginR = window.innerWidth - document.documentElement.clientWidth + "px";

    videoButton.addEventListener("click", () => {
      popupVideo.setAttribute("src", popupVideoSrc);
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.marginRight = marginR;
      popup.style.display = "flex";
      setTimeout(() => {
        popup.classList.add("popup--open");
      }, 0);
    });

    popup.addEventListener("click", (e) => {
      if (!e.target.classList.contains("popup__video") || e.target == closeButton) {
        popup.classList.remove("popup--open");
        document.documentElement.style.overflow = "visible";
        document.documentElement.style.marginRight = 0;
        setTimeout(() => {
          popup.style.display = "none";
        }, 1000);
        popupVideo.setAttribute("src", "");
      }
    });
  }

  let detailsButton = document.querySelector(".menu-aside"),
    detailFilter = document.querySelector(".aside"),
    detailsCloseButton = document.querySelector(".aside__menu"),
    marginR = window.innerWidth - document.documentElement.clientWidth + "px",
    asideButton = document.querySelectorAll(".aside__button");


  if (detailsButton && detailsCloseButton) {
    detailsButton.addEventListener("click", () => {
      detailFilter.classList.add("aside--opened");
      document.documentElement.style.marginRight = marginR;
      document.documentElement.style.overflow = "hidden";
    });
    detailsCloseButton.addEventListener("click", () => {
      detailFilter.classList.remove("aside--opened");
      document.documentElement.style.marginRight = 0;
      document.documentElement.style.overflow = "visible";
    });
  }

  if (asideButton[0]) asideButton.forEach(element => {
    element.addEventListener("click", () => {
      detailFilter.classList.remove("aside--opened");
      document.documentElement.style.marginRight = 0;
      document.documentElement.style.overflow = "visible";
    });
  });

  let accordionButton = document.querySelectorAll(".question__button"),
    accordionContent = document.querySelectorAll(".question__answer");

  if (accordionButton[0]) {
    accordionButton.forEach((element, i) => {
      element.addEventListener("click", () => {
        accordionContent.forEach((elementContent, i1) => {
          if (i1 == i) elementContent.classList.add("question__answer--active");
          else elementContent.classList.remove("question__answer--active");
        });
        accordionButton.forEach(elementButton => {
          if (elementButton == element) elementButton.classList.add("question__button--active");
          else elementButton.classList.remove("question__button--active");
        });
      });
    });
  }
  console.log([]);
});