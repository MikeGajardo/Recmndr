import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { UserAuth } from "../../Context/AuthContext";



export const Navba = () => {
  const {user, logOut} = UserAuth
  const history = useHistory();

  const  handleLogout = async () => {
    try {
      await logOut()
      history.push("/");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 d-flex">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Link to="/Singup">
            <Button variant="outline-success">Sign Up</Button>{' '}
            </Link>
            {user?.email ? (
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          
            ) : (
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Signin">Sign in</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>)}
          </Container>
        </Navbar>
      ))}
    </>
  );
};
