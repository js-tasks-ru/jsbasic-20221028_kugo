import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor () {
  }

  content = createElement(`
                            <div class="modal">
                            <!--Прозрачная подложка перекрывающая интерфейс-->
                            <div class="modal__overlay"></div>
                            <div class="modal__inner">
                              <div class="modal__header">
                                <!--Кнопка закрытия модального окна-->
                                <button type="button" class="modal__close">
                                  <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                                </button>
                                <h3 class="modal__title">
                                </h3>
                              </div>
                              <div class="modal__body">
                                A сюда нужно добавлять содержимое тела модального окна
                              </div>
                            </div>
                          </div>`)

  open() {
    //открытье
    document.body.classList.add('is-modal-open');
    document.body.append(this.content);

    // ESC-кнопка
    let modal = document.querySelector('.modal');
    document.addEventListener('keydown', closureWinBtn);

    function closureWinBtn(event) {
      if (event.code == 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', this.closureWinBtn);
        document.body.classList.remove('is-modal-open');
      }
    }

    // X-кнопка
    let button = document.querySelector('.modal__close');
    button.addEventListener("click", closureWinBtnTwo);

    function closureWinBtnTwo() {
      modal.remove();
      document.removeEventListener('keydown', this.closureWinBtn);
      document.body.classList.remove('is-modal-open');
    }

    

  }

 

  setTitle(nem) {
    let modalTitle = this.content.querySelector('.modal__title');
    modalTitle.innerHTML = nem;
  }

  setBody(men) {
    let body = this.content.querySelector('.modal__body');
    body.firstChild.replaceWith(men);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.content.remove();
  }

}
