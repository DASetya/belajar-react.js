import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "../validations/validationSchema";

const BookForm = () => {
  // object destructuring
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <Row>
      <Col>
        <h3 className>Book Form Component</h3>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              name="title"
              {...register("title")}
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.title?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPublisher">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book publisher"
              name="publisher"
              {...register("publisher")}
              className={`form-control ${errors.publisher ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.publisher?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book year"
              name="year"
              {...register("year")}
              className={`form-control ${errors.year ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.year?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book description"
              name="description"
              as="textarea"
              rows={3}
              {...register("description")}
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.description?.message}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPage">
            <Form.Label>Page</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter page"
              name="page"
              {...register("page")}
              className={`form-control ${errors.page ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.page?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book price"
              name="price"
              {...register("price")}
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.price?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLanguage">
            <Form.Label>Language</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book language"
              name="language"
              {...register("language")}
              className={`form-control ${errors.language ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.language?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book stock"
              name="stock"
              {...register("stock")}
              className={`form-control ${errors.stock ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.stock?.message}</div>
          </Form.Group>

          <Button variant="success" type="submit">
            Save
          </Button>
          <Button variant="warning" className="mx-3" >Cancel</Button>
        </Form>
      </Col>
    </Row>
  );
};
export default BookForm;
