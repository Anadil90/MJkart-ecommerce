import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main2";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <div>
    <Provider store={store}>
      <Container>
        <Navbar />
      <Main />
      <Home />
      <Footer />
      </Container>
    </Provider> 
    </div>
  );
};

export default App;
