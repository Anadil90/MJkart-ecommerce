import "../App.css";
import "./navbar.css";
import { 
  Navbar, Nav, NavbarBrand, Button, NavItem, NavLink, Modal, ModalBody, ModalHeader, FormGroup, Label
} from "reactstrap";
import MJKARTLOGO from "../assets/racetosavings.png";
import userIcon from "../assets/user-icon.png";
import { useState } from "react";
import cart from "../assets/add-to-cart.png";
import { Formik, Field, Form } from 'formik';

const NavBar = () => {

const [online, setOnline] = useState("user offline"); //user state
const [userModal, setUserModal] = useState(false)
const [username, setUsername ] = useState('');
const [password, setPassword] = useState(undefined);
const [cartLoaded, setCartLoaded] = useState(false);//shopping cart state

const user = {
  username: '',
  password: ''
}
console.log(user)
const handleLogin = (values) => {
  user.username = values.username;
  user.password = values.password;
  setUserModal(false)
}

const loadCart = () => {
  setCartLoaded(true);
}
  
  return (
    <div>
      <Navbar>
        
        <NavbarBrand href="/">
          <img className='main-logo' src={MJKARTLOGO} alt="logo-created" />
        </NavbarBrand>

        <Nav>

        <NavItem>
          <img src={cart} className="shopping-cart" onClick={() => loadCart()}/>
          <Modal isOpen={cartLoaded}>
        <ModalHeader toggle={() => {setCartLoaded(false)}}>Shopping Cart</ModalHeader>
        <ModalBody>
            <p>This is your shopping cart content.</p>
        </ModalBody>
        </Modal>

          <Button
            onClick={() => {
                setUserModal(true);
                {/*setOnline("user online 🟢");*/}
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15, color: "#fff" }}
            className="authentication"
          >
            Sign In
          </Button>

          <Modal isOpen={userModal}>
            <ModalHeader toggle={() => {setUserModal(false)}}>Login</ModalHeader>
            <ModalBody>
              <Formik
              initialValues={{username: '', password: ''}}
              onSubmit={handleLogin}
              >
                <Form>
                  <FormGroup>
                    <Label htmlFor='username' className='form-control'>Username</Label>
                    <Field id='username' name='username' placeholder='Username' className='form-control'/>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor='password' className='form-control'>Password</Label>
                    <Field id='password' name='password' placeholder='Password' className='form-control'/>
                  </FormGroup>
                  <Button type='submit' color='primary'>Login</Button>
                </Form>
              </Formik>
            </ModalBody>
          </Modal>

          
          
          {/*<Button
        
            onClick={() => {
                setOnline(!online);
            }}
            style={{ color: "grey", fontWeight: 100, margin: 15, color: "#fff" }}
            className="authentication"
          >
            Sign out
          </Button>
          */}
          </NavItem>
      
        </Nav>
      </Navbar>
      
    </div>
  );
}

export default NavBar;
