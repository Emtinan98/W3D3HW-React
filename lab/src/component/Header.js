import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Nav,Navbar,NavDropdown,Carousel,Col,Row,ListGroup} from 'react-bootstrap';


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="/Home">
            <img
              alt=""
              src="https://cdn-icons.flaticon.com/png/512/3242/premium/3242257.png?token=exp=1657048432~hmac=e6fe24918c4c65f4f39850d5aa6da96f"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            My Website
           
          </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/Cards">Card</Nav.Link>
            <Nav.Link href="/About">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );}

export default Header;