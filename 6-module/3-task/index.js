import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render;
  }

  get render() {
    this.elem = createElement(`<div class="carousel"><div class="carousel__arrow carousel__arrow_right">
                                  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                                </div>
                                <div class="carousel__arrow carousel__arrow_left">
                                  <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                                </div></div>`);
    let slidesList = this.slides
      .map(({name, price, image, id}) => {
        let slide = `<div class="carousel__slide" data-id="${id}">
                      <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide ${name}">
                      <div class="carousel__caption">
                        <span class="carousel__price">€${price.toFixed(2)}</span>
                        <div class="carousel__title">${name}</div>
                        <button type="button" class="carousel__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                        </button>
                      </div>
                    </div>`;
        return slide;
      })
      .join('');

    const coruselInr = document.createElement('div');
    coruselInr.classList.add('carousel__inner');
    coruselInr.innerHTML = slidesList;
    this.elem.append(coruselInr);
    
    coruselInr.dataset.position = 0;

    const btnLeft = this.elem.querySelector('.carousel__arrow_left');
    btnLeft.style.display = 'none';

    this.elem.addEventListener('click', this.onClick);

    return this.elem;
  }

  onClick(event) {
    const slides = document.querySelectorAll('.carousel__slide');
    const carouselInr = document.querySelector('.carousel__inner');
    const buttonLtf = document.querySelector('.carousel__arrow_left');
    const bottonRgt = document.querySelector('.carousel__arrow_right');
    // --------------
    const carouselArrowLeft = event.target.classList.contains('carousel__arrow_left');
    const carouselArrowImgLeft = event.target.offsetParent.classList.contains('carousel__arrow_left');
    //---------------
    const carouselArrowRight = event.target.classList.contains('carousel__arrow_right');
    const carouselArrowImgRight = event.target.offsetParent.classList.contains('carousel__arrow_right');
    

    // кнопка вперед 
    if (carouselArrowRight || carouselArrowImgRight) {
      carouselInr.dataset.position = Number(carouselInr.dataset.position) - Number(slides[0].offsetWidth);
    }
    // кнопка назад
    if (carouselArrowLeft || carouselArrowImgLeft) {
      carouselInr.dataset.position = Number(carouselInr.dataset.position) + Number(slides[0].offsetWidth);
    }
  
    // контейнер
    carouselInr.style.transform = `translateX(${carouselInr.dataset.position}px)`;

    if (carouselInr.dataset.position < 0) {
      buttonLtf.style.display = '';
    } 
    if (carouselInr.dataset.position === '0') {
      buttonLtf.style.display = 'none';
    }

    if (`${carouselInr.dataset.position}` === `-${slides[0].offsetWidth * slides.length - slides[0].offsetWidth}`) {
      bottonRgt.style.display = 'none';
    }


    if (carouselInr.dataset.position > -(slides[0].offsetWidth * slides.length - slides[0].offsetWidth)) {
      bottonRgt.style.display = '';
    }

    if (event.target.classList.contains('carousel__button') || event.target.parentElement.classList.contains('carousel__button')) {
      let newEvent = new CustomEvent('product-add', {
        detail: event.target.closest('.carousel__slide').dataset.id, 
        bubbles: true
      });
      event.target.closest('.carousel__slide').dispatchEvent(newEvent);
    }
  }
}