import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../Context/BooksContext";
import BookForm from "./BookForm";
import BooksContext from "../../Context/BooksContext";

const AddBook = (/*props*/) => {
  //   const { books, setBooks } = props;
  const { books, setBooks } = useContext(BooksContext); //use context method (called consumer) instead of props method
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate("/");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
