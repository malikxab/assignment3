import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
//import './Projects.css';

const projects = [
  {
    image: 'project1.jpg',
    name: 'Gym Management System',
    description: 'My semester project that used Database systems, SQL, MySql, NoSql, Php, and HTML. This project used CRUD operations, to manage and facilitate all the things (members + equipments + trainers) at the gym!'
  },
  {
    image: 'project2.jpg',
    name: 'Univents',
    description: 'This project was made in Flutter for as a Mobile Application developement for a semester project. This project collected data from different universities and let students enroll themselves from a single application in whatever university event they would like to.'
  },
  {
    image: 'project3.jpg',
    name: 'ToDo List',
    description: 'I had made this project in react.js when I was an intern at Mercurial Minds Islamabad.'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
