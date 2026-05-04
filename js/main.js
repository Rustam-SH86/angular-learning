import {getUsersFromStorage} from '../async/async.js'
import {renderCards} from '../async/cards-render.js'
import '../async/handlers.js'


async function init() {
  try {
    const users = await getUsersFromStorage();
    renderCards(users);
  } 
  catch (error) {
    showError('Error loading data');
    console.log('Loading error', error);
  }
};

init();

