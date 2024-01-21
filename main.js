class bookstore {
  constructor(books) {
    this.books = books;
  }

  listBooks() {

    for(let i = 0; i < this.books.length; i++)
    {
      this.books[i].displayBook();
    }

  }

  addBook(newBook) {

    this.books.push(newBook);

  }
}

class book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  displayBook () {
    console.log(`${this.name} by ${this.author}`);
  }
}

const nineteen84 = new book("1984", "James Orwell");

const hp = new book("Harry Potter", "J.K Rowling");

const dbz = new book("Dragon Ball Z", "Akira Toriyama");

const bookStore = new bookstore([nineteen84,hp]);

bookStore.addBook(dbz)

bookStore.listBooks();

