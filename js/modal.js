export class Modal {
  constructor(modalId, overlay, closeModalButton) {
    this.modalId = modalId;
    this.overlay = overlay;
    this.closeModalButton = closeModalButton;
    this.closeModalListener();
  }

  openModal() {
    this.modalId.style.display = 'block';
    this.overlay.style.display = 'block';
  }

  closeModal() {
    this.modalId.style.display = 'none';
    this.overlay.style.display = 'none';
  }

  isModalOpen() {
    return this.modalId.style.display === 'block';
  }

  closeModalListener() {
    this.closeModalButton.addEventListener('click', () => {
      this.closeModal();
    });
  }
};
