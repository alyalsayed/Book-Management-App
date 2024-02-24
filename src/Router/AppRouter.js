import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "../Components/AddBook/AddBook";
import BooksList from "../Components/BooksList/BooksList";
import Header from "../Components/Header/Header";
import NotFound from "../Components/PageNotFound/NotFound";
import EditBook from "../Components/EditBook/EditBook";
import useLocalStorage from "../Hooks/useLocalStorage";
import BooksContext from "../Context/BooksContext";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Routes>
              <Route
                path="/"
                element={<BooksList books={books} setBooks={setBooks} />}
              />
              <Route
                path="/add"
                element={<AddBook books={books} setBooks={setBooks} />}
              />
              <Route
                path="/edit/:id"
                element={<EditBook books={books} setBooks={setBooks} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
