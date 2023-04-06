import { v4 as uuid } from 'uuid';

class Book {
  constructor(id, title, author, category = 'Action') {
    this.id = id || uuid();
    this.title = title;
    this.author = author;
    this.category = category;
  }
}

export default Book;
