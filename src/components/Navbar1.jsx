import { Navbar, NavbarBrand } from "reactstrap";
import MJKARTLOGO from "../assets/MJ Kart-logo.png";
import UserLog from "../assets/3541871.png";
import setting from "../assets/settings.png";
import "../App.css";
import { useState } from "react";

function Navbar1(args) {
  const logoStyle = {
    width: 100,
    hieght: 100,
  };

  const logoStyle2 = {
    width: 60,
    hieght: 60,
  };

  const [offline, setOnline] = useState("User Offline");
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
          <button>Cart</button>
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
    </div>
  );
}

export default Navbar1;
