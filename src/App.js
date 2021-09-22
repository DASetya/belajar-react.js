import { Container, Row } from "react-bootstrap";
import BookComponent from "./components/BookComponent";

function App() {
  return (
    <Container>
      <Row>
        <BookComponent title="Warkop DKI" description="Warkop DKI Reborn" variant="warning" />
        <BookComponent title="Warkop DKI" description="Warkop DKI Reborn" variant="warning" />
        <BookComponent title="Warkop DKI" description="Warkop DKI Reborn" variant="warning" />
        <BookComponent title="Warkop DKI" description="Warkop DKI Reborn" variant="warning" />
      </Row>
    </Container>
  );
}

export default App;
