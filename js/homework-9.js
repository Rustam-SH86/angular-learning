
//3. Сверстать данный footer, используя семантические теги (footer, nav и т.д.)
//4. К Форме, которая прикреплена в футере - добавить логику:email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const subscribeForm = document.querySelector('.subscribe-form');
subscribeForm.addEventListener('submit', (event) =>{
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

5.// Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  

const registrationButton = document.querySelector('.registration-button');
const overlay = document.querySelector('#overlay');
const modalWindow = document.querySelector('#modal');
const closeModalButton = document.querySelector('#closemodal-button');

registrationButton.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
})

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

function closeModal() {
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
}

//6. Создать форму для регистрации внутри модального окна.

 const registrationForm = document.querySelector('#registration-form');
  registrationForm.addEventListener('submit', (event) =>{
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  checkValidity(data)
 })

 function checkValidity(data) {
  if(data.password != data.confirmPassword){
    console.log('Пароли не совпадают')
    return;
  }
    const user = {
    ...data,
    password:btoa(data.password),
    confirmPassword: btoa(data.confirmPassword),
    createdOn: new Date(),
  }
    console.log('Регистрация успешна', user);
    closeModal();
 }



