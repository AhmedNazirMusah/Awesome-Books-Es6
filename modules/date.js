import { DateTime } from '../node_modules/luxon/src/luxon.js';

const setDate = () => {
  const datehandler = document.querySelector('.date');
  datehandler.innerHTML = `<h2 class="dates">${DateTime.now()}<h2>`;
};

export default setDate;