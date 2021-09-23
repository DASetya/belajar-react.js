import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import BookList from "../components/books/BookList";
import BookForm from "../components/books/BookForm";
import MemberList from "../components/members/MemberList";
import MemberForm from "../components/members/MemberForm";
import Navigation from "./template/Navigation";
import Home from "./Home";
import Footer from "./template/Footer";
import BookDetail from "../components/books/BookDetail";
import NotFound from "../components/404/NotFound";
import { Redirect } from "react-router";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <section className="py-5 container mt-5">
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookList} />
          <Route path="/books/add" exact component={BookForm} />
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/members" exact component={MemberList} />
          <Route path="/members/add" exact component={MemberForm} />
          {/* <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" /> */}
        </section>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
