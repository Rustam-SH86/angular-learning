const messageBlock = document.getElementById('message');

export function showInfo(text) {
  messageBlock.textContent = text;
  messageBlock.className = 'message info-message';
}

export function showError(text) {
  messageBlock.textContent = text;
  messageBlock.className = 'message error-message';
}

export function clearMessage() {
  messageBlock.textContent = '';
  messageBlock.className = 'message';
}