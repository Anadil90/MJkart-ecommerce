import { Navbar, NavbarBrand } from "reactstrap";
import MJKARTLOGO from "../assets/MJ Kart-logo.png";
import UserLog from "../assets/3541871.png";
import setting from "../assets/settings.png";
import "../App.css";

function Navbar1(args) {
  const logoStyle = {
    width: 100,
    hieght: 100,
  };

  const logoStyle2 = {
    width: 60,
    hieght: 60,
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
        <NavbarBrand href="/">
          <img style={logoStyle2} src={setting} alt="logo-created" />
        </NavbarBrand>

        <NavbarBrand href="/">
          <img style={logoStyle2} src={UserLog} alt="logo-created" />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navbar1;
