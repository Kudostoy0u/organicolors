// src/pages/About.tsx
import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="about-section">
      <Container>
        <br/><br/>
        <h2>About Us</h2>
        <p>Organicolors is dedicated to supporting leukemia charities through the sale of artwork.</p>
        <br/><br/><br/>
      </Container>
    </div>
  );
};

export default About;
