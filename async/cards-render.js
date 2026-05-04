import { deleteOneUser } from './handlers.js';

const userTemplate = document.getElementById('user-template');
const userList = document.getElementById('user-list');

export function renderCards(users) {
  userList.innerHTML = '';

  users.forEach((user) => {
    const userClone = userTemplate.content.cloneNode(true);

    userClone.querySelector('.user-id').textContent = user.id;
    userClone.querySelector('.user-name').textContent = user.name;
    userClone.querySelector('.user-surname').textContent = user.surname;
    userClone.querySelector('.user-email').textContent = user.email;
    userClone.querySelector('.user-age').textContent = user.age;
    userClone.querySelector('.user-isActive').textContent = user.isActive;
    userClone.querySelector('.user-role').textContent = user.role;
    const img = userClone.querySelector('.user-image');
    img.src = '../images/user_image.jpg';
    img.alt = `${user.name} ${user.surname}`;

    const deleteButton = userClone.querySelector('.user-deleteButton');
    deleteButton.addEventListener('click', () => {
      deleteOneUser(user.id);
    });

    userList.appendChild(userClone);
  });
};
