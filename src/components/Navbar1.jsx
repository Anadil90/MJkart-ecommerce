import { Navbar, Nav, NavbarBrand, Button, NavItem, NavLink } from "reactstrap";
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

function Navbar1(args) {
  const logoStyle = {
    width: 200,
    height: 200,
  };

  const logoStyle2 = {
    width: 60,
    height: 60,
  };

  const [online, setOnline] = useState("user offline"); //initialise default state of user
  const [username, setUsername ] = useState('')
  
  return (
    <div>
      <Navbar>
      
            {/*<NavLink><link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /></NavLink>*/}
        
        <NavbarBrand href="/">
          <img style={logoStyle} src={MJKARTLOGO} alt="logo-created" />
        </NavbarBrand>

        <Nav>
          <NavItem>
            <NavLink href="/">
          <img style={logoStyle} className="navbarStyling" alt="logo-created" />
        </NavLink>
          </NavItem>
        

        <NavItem>
          <Button>Cart</Button>
          <Button
            onClick={() => {
                setOnline("user online 🟢");
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15, color: "#fff" }}
            className="authentication"
          >
            Sign In
          </Button>

          <Button>Cart</Button>

          
          <Button
        
            onClick={() => {
                setOnline(!online);
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15, color: "#fff" }}
            className="authentication"
          >
            Sign out
          </Button>

          
          
          <small style={{ marginRight: 10 }}>{online}</small>
          <img style={logoStyle2} src={UserLog} alt="logo-created" />
          </NavItem>
      
        </Nav>
      </Navbar>
      <Modal isOpen={modalIsOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Shopping Cart</ModalHeader>
        <ModalBody>
          <p>This is your shopping cart content.</p>
        </ModalBody>
        <Button color="primary" onClick={toggleModal}>
          <p>Close</p>
        </Button>
      </Modal>
    </div>
  );
}

export default Navbar1;
