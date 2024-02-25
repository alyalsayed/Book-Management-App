import React from "react";
import { useNavigate } from "react-router-dom";
import "./Book.css";
const Book = ({ id, bookname, author, price, quantity, date, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title book-title">{bookname}</h5>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity}</div>
          <div>Price: {price}</div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>{" "}
        <button
          className="btn btn-danger"
          onClick={() => onRemove(id)}
          aria-label="Delete book"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
