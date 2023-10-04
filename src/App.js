import React from "react";
import Navbar1 from "./components/Navbar1";
import Main from "./components/Main2";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Container } from 'reactstrap';

const App = () => {
  return (
    <div>
      <Container>
        <Navbar1 />
      <Main />
      <Home />
      <Footer />
      </Container>
      
    </div>
  );
};

export default App;
