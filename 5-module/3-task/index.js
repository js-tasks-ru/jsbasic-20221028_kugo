"use strict";

function initCarousel() {
  const carousel = document.querySelector(".carousel");

  const carouselInr = carousel.querySelector(".carousel__inner");

  const buttnLtf = carousel.querySelector(".carousel__arrow_left");

  const butttnRgt = carousel.querySelector(".carousel__arrow_right");

  const slide = carousel.querySelector(".carousel__slide");

  const slids = carousel.querySelectorAll(".carousel__slide");

  carouselInr.dataset.position = 0; // 0 с начала 
  buttnLtf.style.display = "none"; // кнопки налево нет

  function mouseScroled(event) {
    const carouselArrowRight = event.target.classList.contains("carousel__arrow_right");

    const carouselArrowRgtImg = event.target.offsetParent.classList.contains("carousel__arrow_right");

    const carouselArrowLeft = event.target.classList.contains("carousel__arrow_left");

    const carouselArrowLftImg = event.target.offsetParent.classList.contains("carousel__arrow_left");
   

    if (carouselArrowRight || carouselArrowRgtImg) {
      carouselInr.dataset.position = Number(carouselInr.dataset.position) - Number(slide.offsetWidth);
    } // нажатье кнопки вперед

    if (carouselArrowLeft || carouselArrowLftImg) {
      carouselInr.dataset.position = Number(carouselInr.dataset.position) + Number(slide.offsetWidth);
    } // нажатье кнопки назад

    carouselInr.style.transform = `translateX(${carouselInr.dataset.position}px)`; // движение основого котейнера

    if (carouselInr.dataset.position < 0) {
      buttnLtf.style.display = "";
    } // левая кнопка по второ слайда
    if (carouselInr.dataset.position === "0") {
      buttnLtf.style.display = "none";
    } // скрытье кнопки налево

    if (carouselInr.dataset.position > -(slide.offsetWidth * slids.length - slide.offsetWidth)) {
      butttnRgt.style.display = "";
    } // кнопка направо
    if (`${carouselInr.dataset.position}` === `-${slide.offsetWidth * slids.length - slide.offsetWidth}`) {
      butttnRgt.style.display = "none";
    } // скрытье кнопки направо
  }

  carousel.addEventListener("click", mouseScroled);
}
