// src/pages/About.tsx
import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="about-section">
      <Container>
        <br/><br/>
        <h2>About Us</h2>
        <p>It doesn't matter if you copy one person's homework or copy a multitude of different homework and mix them into one, the result is the same: an unoriginal, pre-existing piece of work. However, the more serious issue is that what AI is copying is more than just homework, it is copying human art, created from experience, lessons, and emotions. As an online marketplace for real artworks done by students, we are inspired by the fact that for thousands of years, art has always been a key indicator to showcase the historical situation of the time. This is something that AI can not replicate as it lacks human creativity and visualization. As a group of high schoolers, we want to celebrate the variety of art everyone can create by showcasing them on this platform. More so, we wish to support and celebrate the upcoming artists in our community through the sales of their framed art, with profits going straight back to them. The ultimate goal of this platform is to bring awareness to the unreplicable parts of the human mind and heart expressed through the multitude of art forms.</p>
        <br/><br/><br/>
      </Container>
    </div>
  );
};

export default About;
