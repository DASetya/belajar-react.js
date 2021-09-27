import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookComponent from "./BookComponent";
import { getListBook, deleteBook } from "../../api/bookService";
import { tmpImage } from "../../api/BookApi";
import ModalComponent from "../modal/ModalComponent";

const BookList = ({ match }) => {
  const { path } = match;
  const [books, setBooks] = useState([]);
  const [modalShow, setModalShow] = useState({
    show: false,
    id: null,
  });
  useEffect(() => {
    getListBook().then((response) => setBooks(response.data));
  }, [books]);

  const handleDelete = (id) => {
    setModalShow({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = () => {
    if (modalShow.show && modalShow.id) {
      bookDelete(modalShow.id);
      setModalShow({
        show: false,
        id: null,
      });
    }
  };

  const bookDelete = (id) => {
    return deleteBook(id).then((response) => {
    });
  };

  return (
    <section className="py-5 container mt-5">
      <h3>Books Page</h3>
      <Link to="/books/add" className="btn btn-sm btn-primary mb-3">
        Add Book
      </Link>
      <Row>
        {books.map((book) => (
          <BookComponent
            path={path}
            key={book.id}
            bookId={book.id}
            title={book.title}
            description={book.description}
            pages={book.pages}
            purchaseAmount={book.purchaseAmount}
            price={book.price}
            language={book.language}
            stock={book.stock}
            publisher={book.publisher}
            year={book.year}
            image={tmpImage}
            handleDelete={handleDelete}
          />
        ))}
        {books && !books.length && <h4>No Book on Display</h4>}
      </Row>
      {modalShow.show && (
        <ModalComponent
          show={modalShow}
          handleDeleteTrue={handleDeleteTrue}
          onHide={() => setModalShow(false)}
        />
      )}
    </section>
  );
};
export default BookList;
