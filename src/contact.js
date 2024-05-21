import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
//import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="mb-4">Contact</h2>
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name." />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your e-mail here." />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div class="mt-4">
              <p>Connect with me here.</p>
                <a  href="https://www.linkedin.com/in/hashaam-awan-73198b260/" target="_blank" rel="noopener noreferrer" className="ml-3">
                  <i class="fab fa-linkedin fa-2x"></i>LinkedIn
                </a>
                <a href="https://github.com/malikxab" target="_blank" rel="noopener noreferrer" className="ml-3">
                  <i class="fab fa-github fa-2x"></i>Github
                </a>
             </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

