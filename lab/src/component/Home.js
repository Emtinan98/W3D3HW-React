import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Nav,Navbar,NavDropdown,Carousel,Col,Row} from 'react-bootstrap';


function Home() {
  return (
    <div>
         <Container>
      <Row>
        <Col></Col>
        <Col xs={8}> <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Study hard, for the well is deep, and our brains are shallow.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>“The art of reading and studying consists in remembering the essentials and forgetting what is not essential.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
           Let us study things that are no more. It is necessary to understand them, if only to avoid them.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
        <Col></Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home