import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main2";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Container } from 'reactstrap';

const App = () => {
  return (
    <div>
      <Container>
        <Navbar />
      <Main />
      <Home />
      <Footer />
      </Container>
      
    </div>
  );
};

export default App;
