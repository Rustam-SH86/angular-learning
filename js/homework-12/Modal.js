export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.#initClose();

  }

  controleOverlay = () => {
    this.closeModal();
  }

  openModal() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if(this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click',
        this.controleOverlay
      );
    }
  }

  closeModal() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    this.overlay.removeEventListener('click',
      this.controleOverlay
    )
  }

  isModalOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.openModal();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector('.modalwindow-close-button');

    closeButton.addEventListener('click', () => {
      this.controleOverlay();
    });
  }
}
