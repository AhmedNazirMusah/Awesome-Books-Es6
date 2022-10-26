import Liberary from './class.js';
import setDate from './date.js';

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');
const list = localStorage.books ? JSON.parse(localStorage.getItem('books')) : [];

const myBookList = new Liberary(list);
const bookSection = document.querySelector('.display-books');

window.removeBook = function removeBook(id) {
  myBookList.removeBook(id);
  const updatedList = myBookList.fetchBooks();
  bookSection.innerHTML = updatedList.join('');
};

const booksCards = myBookList.fetchBooks();
bookSection.innerHTML = booksCards.join('');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const currentBook = myBookList.createBookObj(
    titleInput.value,
    authorInput.value,
  );
  myBookList.addBook(currentBook);
  const updatedList = myBookList.fetchBooks();
  bookSection.innerHTML = updatedList.join('');
  authorInput.value = '';
  titleInput.value = '';
});

const navList = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

const ListSection = document.querySelector('.books-section');
const AddSection = document.querySelector('.add-book-section');
const contactSection = document.querySelector('.contact-section');

navList.addEventListener('click', (e) => {
  e.preventDefault();
  ListSection.classList.remove('d-none');
  AddSection.classList.add('d-none');
  contactSection.classList.add('d-none');
});

add.addEventListener('click', (e) => {
  e.preventDefault();
  AddSection.classList.remove('d-none');
  ListSection.classList.add('d-none');
  contactSection.classList.add('d-none');
});

contact.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.classList.remove('d-none');
  AddSection.classList.add('d-none');
  ListSection.classList.add('d-none');
});

setInterval(setDate, 1000);