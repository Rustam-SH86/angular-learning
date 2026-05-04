import { getUsersFromStorage, getUsers } from './async.js';
import { renderCards } from './cards-render.js';
import { showInfo, showError, clearMessage } from './messages.js';

const getAllUserButton = document.getElementById('get-all-users-button');
const deleteAllUserButton = document.getElementById('delete-all-users-button');

export async function deleteOneUser(id) {
  clearMessage();
  const users = await getUsersFromStorage();
  const updatedUsers = users.filter((user) => user.id !== id);
  localStorage.setItem('users', JSON.stringify(updatedUsers));

  renderCards(updatedUsers);

  if (updatedUsers.length === 0) {
    showInfo('There are no users to display');
  }
}

deleteAllUserButton.addEventListener('click', () => {
  localStorage.removeItem('users');
  renderCards([]);
  showInfo('All users have been deleted');
});

export async function getAllUser() {
  try {
    clearMessage();

    const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
    const allUsers = await getUsers();

    if (currentUsers.length == allUsers.length) {
      showInfo('all users already have been downloaded');
      return;
    }

    localStorage.setItem('users', JSON.stringify(allUsers));
    renderCards(allUsers);
    showInfo('all users downloaded');
  } catch (error) {
    showError('Error loading data');
    console.log(error);
  }
}

getAllUserButton.addEventListener('click', () => {
  getAllUser();
});
