import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
//import './Skills.css';

const skills = [
  { name: 'HTML', value: 75 },
  { name: 'CSS', value: 85 },
  { name: 'JavaScript', value: 75 },
  { name: 'React.js', value: 75 },
  { name: 'FullStack Developement' , value: 60},
  { name: 'Management' , value: 90},
  { name: 'Driving', value: 80},
  { name: 'Chat GPT', value: 85}
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="mb-4">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.value} label={`${skill.value}%`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
