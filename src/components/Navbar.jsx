import "../App.css";

import { Navbar, Container, Nav, NavItem, NavLink, Button } from "reactstrap";

const NavbarComponent = () => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <div className="logo">Logo</div>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">
              <img
                src="profile.jpg"
                alt="Profile"
                className="profile-picture"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <Button color="danger">Logout</Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
