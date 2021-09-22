import React from 'react'
import { Container, Row } from "react-bootstrap";
import BookComponent from "./BookComponent";

const BookList = ({ dataBooks }) => {
  return (
    <Container>
      <Row>
        {dataBooks.map((book) => (
          <BookComponent
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            variant="info"
          />
        ))}
      </Row>
    </Container>
  );
};
  
export default BookList;
