import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import BilgiOlcer from "../assets/BilgiÖlçer-icon.png"
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Navs() {

  const {user,setUser}=useContext(LoginContext);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"180px"}
              height={"150px"}
              src={BilgiOlcer}
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {!user.email ? (<Link className="nav-link" to="/login">
              Login
            </Link>) : (<Link onClick={()=>setUser({email:"",password:""})} className="nav-link" to="/login">
              Logout
            </Link>)}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
