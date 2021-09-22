import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const BookForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            id: Math.floor(Math.random() * 100) +1,
            title: 'Fs Mudah Membuat dan Berbisnis Aplikasi Android dengan Android Studio',
            description: 'Mudah Membuat dan Berbisnis Aplikasi Android dengan Android Studio Penulis: Yudha Yudhanto & Ardhi Wijayanto Pengembangan aplikasi digital untuk perangkat mobile (ponsel pintar dan tablet) merupakan salah satu bidang yang prospektif untuk terus dikembangkan.',
            image: 'https://cdn.gramedia.com/uploads/items/ID_MMBAA2018MTH05MMBAA.jpg'
        }
        props.onCreateBook(newBook);
    }
  return (
    <div>
        <h3>Book Form Component</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter book title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter book description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Enter image url" />
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>
      </Form>
    </div>
  );
};
export default BookForm;
