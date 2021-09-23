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
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookList} />
          <Route path="/books/add" exact component={BookForm} /> 
          <Route path="/members" component={Members} />
          <Route path="/members" component={Members} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
