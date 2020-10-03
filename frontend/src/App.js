import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreem from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />

        <main className="py-3">
          <Container>
            <h1>Welcome to the e-commerce party</h1>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreem} />
          </Container>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
