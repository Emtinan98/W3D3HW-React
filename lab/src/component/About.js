import React, { useState ,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Nav,Navbar,NavDropdown,Carousel,Col,Row,ListGroup,Badge} from 'react-bootstrap';

//useEffect

function About() {
    const [message, setMessage] = useState('Hi there, how are you?');

    useEffect(() => {
      console.log('useEffect');
      setTimeout(() => {
        setMessage("Welcome to my Website (✿◠‿◠)");
      }, 3000)
    })
    
  return (
    <div>
       <Badge bg="light" text="dark" style={{fontSize: 75}}>
        {message}
      </Badge>{' '}
    </div>
  );
}

export default About;
