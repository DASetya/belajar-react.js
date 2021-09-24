import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookComponent from "./BookComponent";
import { getListBook, deleteBook } from "../../api/bookService";
import { tmpImage } from "../../api/BookApi";

const BookList = ({match}) => {
  const [books, setBooks] = useState([]);
  const {path} = match;
  const {modalShow, setModalShow} = useState({
    
  })

  useEffect(() => {
    getListBook()
    .then((response) =>{
      setBooks(response.data)
    })
  }, [books])

  const bookDelete = (id) => {
    return deleteBook(id)
    .then(response => {

    })
  }

  return (
    <div>
      <h3>Book Page</h3>
      <Link
        to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase"
      >
        add book
      </Link>
      <Row>
        {books.map((book) => (
          <BookComponent
            key={book.id}
            bookId={book.id}
            title={book.title}
            description={book.description}
            purchaseAmount={book.purchaseAmount}
            price={book.price}
            image={tmpImage}
            path={path}
            handleDelete={bookDelete}
          />
        ))}
        {
          books && !books.length && <h4>No data to be displayed</h4>
        }
      </Row>
    </div>
  );
};

export default BookList;
