import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

const BookForm = (props) => {
  return (
    <section className="py-5 container mt-5">
      <Row>
        <Col>
          <h3 className="mt-5">Book Form Component</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                name="title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book description"
                name="description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
export default BookForm;
