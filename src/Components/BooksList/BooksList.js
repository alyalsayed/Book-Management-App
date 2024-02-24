import React from "react";
import Book from "../Book/Book";
import useLocalStorage from "../../Hooks/useLocalStorage"; // Adjust the import path as necessary

const BooksList = () => {
  // Use the useLocalStorage hook to manage the books list
  const [books, setBooks] = useLocalStorage("books", []);

  // Function to handle the removal of a book from the list
  const handleRemoveBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  // Rendering logic
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <Book key={book.id} {...book} onRemove={handleRemoveBook} />
        ))
      ) : (
        <p className="message">No books available. Please add some books.</p>
      )}
    </div>
  );
};

export default BooksList;
