import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
//import './Introduction.css';
import photo from './mefr.JPG'

const Introduction = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <Image src={photo} roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h2 className="mb-3">About Me</h2>
            <p>My name is Hashaam Awan.
              I am currently enrolled in a Bachelor's degree of Computer Science at Air University Islamabad.
              
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
