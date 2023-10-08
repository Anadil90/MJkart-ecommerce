import MJKARTLOGO from "../assets/racetosavings.png";
import {
  Navbar,
  NavbarBrand,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import UserLog from "../assets/3541871.png";
import "../App.css";
import { useState } from "react";
import cart from "../assets/add-to-cart.png";

function Navbar1(args) {
  const logoStyle = {
    width: 200,
    height: 200,
  };

  const logoStyle2 = {
    width: 60,
    height: 60,
  };

  const [offline, setOnline] = useState("Offline");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <img style={logoStyle} src={MJKARTLOGO} alt="logo-created" />
        </NavbarBrand>
        <NavbarBrand href="/">
          <img style={logoStyle} className="navbarStyling" alt="logo-created" />
        </NavbarBrand>
        <NavbarBrand href="/"></NavbarBrand>

        <NavbarBrand href="/">
          <button onClick={toggleModal}>Cart</button>
          <button
            onClick={() => {
              setOnline("User Online 🟢");
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15 }}
          >
            Sign In
          </button>

          <small style={{ marginRight: 10 }}>{offline}</small>
          <img style={logoStyle2} src={UserLog} alt="logo-created" />
        </NavbarBrand>
      </Navbar>
      <Modal isOpen={modalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Shopping Cart</ModalHeader>
        <ModalBody>
          <p>This is your shopping cart content.</p>
        </ModalBody>
        <Button color="primary" onClick={toggleModal}>
          close
        </Button>
      </Modal>
    </div>
  );
}

export default Navbar1;
