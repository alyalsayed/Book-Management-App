import React from "react";
import BookForm from "../AddBook/BookForm";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = ({ books, setBooks }) => {
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
