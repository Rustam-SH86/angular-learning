import { showError, clearMessage } from './messages.js';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function showLoader() {
  document.getElementById('loader').classList.add('showLoader');
}

function hideLoader() {
  document.getElementById('loader').classList.remove('showLoader');
}

export async function getUsers() {
  try {
    clearMessage();
    showLoader();
    await delay(2000);
    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error('Users data was not loaded');
    }

    const data = await response.json();
    if (!data.users) {
      throw new Error('Users field was not found');
    }
    return data.users;
  } catch (error) {
    showError('Error loading data');
    throw error;
  } finally {
    hideLoader();
  }
}

export async function getUsersFromStorage() {
  const checkDataInStorage = localStorage.getItem('users');
  if (checkDataInStorage) {
    return JSON.parse(checkDataInStorage);
  } else {
    const users = await getUsers();
    localStorage.setItem('users', JSON.stringify(users));
    return users;
  }
}
