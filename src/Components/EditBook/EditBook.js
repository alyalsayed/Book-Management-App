import React, { useContext } from "react";
import BookForm from "../AddBook/BookForm";
import { useParams, useNavigate } from "react-router-dom";
import BooksContext from "../../Context/BooksContext";

const EditBook = (/*{ books, setBooks }*/) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((b) => b.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate("/");
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
