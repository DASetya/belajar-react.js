import { Container, Row } from "react-bootstrap";
import BookList from "./components/books/BookList";
import CounterComponent from "./components/counter/CounterComponent";
import Counter from "./components/counter/hooks/Counter";
import Books from "./components/books/Books";
import Members from "./components/members/Members";
import Navigation from "./pages/template/Navigation";
import Home from "./pages/Home";
import Footer from "./pages/template/Footer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import BookForm from "./components/books/BookForm";
import MemberList from "./components/members/MemberList";
import MemberForm from "./components/members/MemberForm"
import Routing from "./pages/Routing";
const App = () => {
  return (
    <Routing />
  );
};

export default App;
