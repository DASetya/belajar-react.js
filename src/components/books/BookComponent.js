import React from "react";
import { Card, Button } from "react-bootstrap";
import './BookComponent.css'

const BookComponent = ({title, description, image, variant}) => {
  return (
    <div className="col-lg-3">
      <Card className="book-card mt-5">
        <Card.Img variant="top" className="book-img" src={image} />
        <Card.Body className="book-desc">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant={variant}>Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookComponent;
