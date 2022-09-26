export default class Liberary {
  constructor(books) {
    this.books = books;
  }

  fetchBooks = () => {
    let BooksCards = [];
    if (this.books) {
      BooksCards = this.books.map(
        (book) => `<div class='${book.title} book-container'>
            <h1 class="book-title">" ${book.title} " <span class="book-author">by ${book.author}</span></h1>
            <button id='${book.id}' class='btn-remove' onclick="removeBook(${book.id})">
            remove
            </button>
            </div><hr>`,
      );
    }
    return BooksCards;
  };

  addBook = (obj) => {
    if (obj.title !== '' && obj.author !== '') {
      this.books.push(obj);
      localStorage.setItem('books', JSON.stringify(this.books));
      alert('Book Added Sucessfully');
    } else {
      alert('Kindly input both the Author Name and the Book Title.');
    }
  };

  removeBook = (ID) => {
    const updatedList = this.books.filter((book) => book.id !== ID);
    this.books = updatedList;
    localStorage.setItem('books', JSON.stringify(updatedList));
    this.updateBooksIds();
  };

  updateBooksIds = () => {
    const count = this.books.length;
    if (count !== 0) {
      for (let i = 0; i < count; i += 1) {
        this.books[i].id = i;
      }
    }
  };

  createBookObj = (title, author) => {
    const count = this.books.length;
    return {
      id: count + 1,
      author,
      title,
    };
  };
}
