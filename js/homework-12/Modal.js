export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modalId = modalId;
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.#initClose(this.shouldCloseOnOverlay);
  }

  openModal() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  closeModal() {
    this.modal.classList.remove('modal-showed');
    const anyModalOpen = document.querySelector('.modalwindow.modal-showed');
    if (!anyModalOpen) {
      this.overlay.classList.remove('overlay-showed');
    }
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

  #initClose(shouldCloseOnOverlay) {
    const closeButton = this.modal.querySelector('.modalwindow-close-button');
    closeButton.addEventListener('click', () => {
      this.closeModal();
    });
    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', () => {
        this.closeModal();
      });
    }
  }
}
