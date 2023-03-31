import AddBook from '../components/books/AddBook';
import Book from '../components/books/Book';

const Books = () => {
  let collections = [
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      year: 1997,
      chapters: 17,
      genre: 'Fantasy',
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: 1954,
      chapters: 12,
      genre: 'Fantasy',
    },
  ];

  const handleOperations = (id) => {
    if (id === 1) {
      collections = collections.filter((book) => book.id !== id);
    }
  };

  return (
    <>
      <div className="books">
        {collections.map((book) => (
          <Book
            key={book.id}
            book={book}
            percent={57}
            handleOperations={handleOperations}
          />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default Books;
