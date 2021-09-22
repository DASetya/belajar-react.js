import { Container, Row } from "react-bootstrap";
import BookList from "./components/books/BookList"
const App = () => {
  return (
    <Container>
      <Row>
        <BookList />
      </Row>
    </Container>
  );
}

export default App;
