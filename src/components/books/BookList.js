import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookComponent from "./BookComponent";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Asesmen Pembelajaran Berbasis Komputer Dan Android",
      description:
        "Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.",
      image:
        "https://cdn.gramedia.com/uploads/items/Asesmen_Pembelajaran_Berbasis_Komputer_dan_Android.jpg",
    },
  ]);

  return (
    <section className="py-5 container mt-5">
      <h3>Book Page</h3>
      <Link to="/books/add" className="btn btn-sm btn-succes mb-3 text-uppercase">
        add book
      </Link>
      <Row>
        {books.map((book) => (
          <BookComponent
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            variant="info"
          />
        ))}
      </Row>
    </section>
  );
};

export default BookList;
