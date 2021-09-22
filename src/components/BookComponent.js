import React from "react";
import { Card, Button } from "react-bootstrap";

const imgUrl =
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

const BookComponent = (props) => {
  return (
    <div className="col-lg-3">
      <Card className="mt-5">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant={props.variant}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookComponent;
