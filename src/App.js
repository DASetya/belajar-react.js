import { Container, Row } from "react-bootstrap";
import BookList from "./components/books/BookList"
import CounterComponent from "./components/counter/CounterComponent";
const App = () => {
  return (
    <Container>
      <Row>
        {/* {<BookList />} */}
        <CounterComponent/>
      </Row>
    </Container>
  );
}

export default App;
