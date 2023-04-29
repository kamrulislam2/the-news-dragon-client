import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../AuthProviders/AuthProviders";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = (event) => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>

              <Nav.Link>About</Nav.Link>
              <Nav.Link>Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button onClick={handleLogOut} variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
