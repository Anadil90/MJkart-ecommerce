import "../App.css";
import "./navbar.css";
import { 
  Navbar, 
  Nav, 
  NavbarBrand, 
  Button, 
  NavItem, 
  NavLink, 
  FormGroup, 
  Label, 
  NavbarToggler,
  Collapse,
  Modal, 
  ModalBody, 
  ModalHeader,
} from "reactstrap";
import MJKARTLOGO from "../assets/racetosavings.png";
import userIcon from "../assets/user-icon.png";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser, removeCurrentUser, selectUserForRemoval} from '../slices/userSlice';
import cart from "../assets/add-to-cart.png";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const NavBar = () => {

const [userModal, setUserModal] = useState("user offline"); //user state
const [menuOpen, setMenuOpen] = useState(false);
const [loginModal, setLoginModalOpen] = useState(false);
const [cartLoaded, setCartLoaded] = useState(false);//shopping cart state
const [loggedIn, setLoggedInUser] = useState(false);
const currentUser = useSelector(selectCurrentUser);
const removeUser = useSelector(selectUserForRemoval)
const dispatch = useDispatch();

const handleLogin = (values) => {
  const currentUser = {
    avatar: userIcon,
    username: values.username,
    password: values.password
  }
  dispatch(setCurrentUser(currentUser))//dispatch actions of the current user
  
  setLoginModalOpen(false)//close user modal upon form submit
}

const handleLogout = (() => {
    
    dispatch(removeCurrentUser(currentUser))
    
   
})

const loadCart = () => {
  setCartLoaded(true);
}

  return (
    <>
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
            
            {currentUser ? (//if current user exists
                    <div style={{ width: '4rem', height: '4rem'}}>
                        <img
                            src={currentUser.avatar}
                            alt={'user'}
                            style={{ width: '100%', height: '100%'}}
                        />
                        <Button onClick={() => handleLogout()}>Logout</Button>
                    </div>
                ) 
                : (//if no current user exists
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', backgroundColor: '#000'}}
                    >
                     Login
                    </Button>
                )
            }

          <Modal isOpen={loginModal}>
            <ModalHeader toggle={() => {setLoginModalOpen(false)}}>Login</ModalHeader>
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
          
          </NavItem>
      
        </Nav>
      </Navbar>
    </>
      
            
  );
}

export default NavBar;
