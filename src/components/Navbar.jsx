import "../App.css";
import "./navbar.css";
import { 
  Navbar, Nav, NavbarBrand, Button, NavItem, NavLink, Modal, ModalBody, ModalHeader
} from "reactstrap";
import MJKARTLOGO from "../assets/racetosavings.png";
import UserLog from "../assets/3541871.png";

import { useState } from "react";

const NavBar = () => {

const [online, setOnline] = useState("user offline"); //initialise default state of user
const [modalOpen, setModalOpen] = useState(false);
//const [toggleModal, setModalToggle] = useState(false);
  //const [username, setUsername ] = useState('');
  
  return (
    <div>
      <Navbar>
        
        <NavbarBrand href="/">
          <img className='main-logo' src={MJKARTLOGO} alt="logo-created" />
        </NavbarBrand>

        <Nav>
          <NavItem>
            <NavLink href="/">
          <img className="navbarStyling" alt="logo-created" />
        </NavLink>
          </NavItem>
        

        <NavItem>
          <Button onClick={() => setModalOpen(true)}>Cart</Button>

          <Modal isOpen={modalOpen}>
            <ModalHeader toggle={() => {setModalOpen(false)}}>Shopping Cart</ModalHeader>
            <ModalBody>
              <p>This is your shopping cart content.</p>
            </ModalBody>
          </Modal>

          {/*<Button
            onClick={() => {
                setOnline("user online 🟢");
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15, color: "#fff" }}
            className="authentication"
          >
            Sign In
          </Button>
          
          <Button
        
            onClick={() => {
                setOnline(!online);
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15, color: "#fff" }}
            className="authentication"
          >
            Sign out
          </Button>
          */}

          <img className='user-logo' src={UserLog} alt="logo-created" />
          </NavItem>
      
        </Nav>
      </Navbar>
      
    </div>
  );
}

export default NavBar;
