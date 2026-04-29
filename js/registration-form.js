import { Modal } from './homework-12/Modal.js';
import { Form } from './Form.js';

const subscribeFormElement = document.querySelector('.subscribe-form');
if (subscribeFormElement) {
  const subscribeForm = new Form('.subscribe-form');

  subscribeForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!subscribeForm.isValid()) {
      console.log('Форма подписки невалидна');
      return;
    }
    const data = subscribeForm.getFormValues();
    console.log(data);

    subscribeForm.resetForm();
  });
}

const registrationForm = new Form('#registration-form');
registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    console.log('Форма регистрации невалидна');
    return;
  }

  const data = registrationForm.getFormValues();

  if (data.password !== data.confirmPassword) {
    console.log('Пароли не совпадают');
    return;
  }

  const user = {
    ...data,
    password: btoa(data.password),
    createdOn: new Date(),
  };

  console.log('Регистрация успешна', user);
  registrationForm.resetForm();

});

