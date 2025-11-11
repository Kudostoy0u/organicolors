import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="about-section text-start bg-dark text-light py-5">
      <Container className="container-sm w-75">
        <h1
          className="text-center text-lg-start mb-4"
          style={{ fontSize: '2.8rem', fontWeight: 700, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          About Us
        </h1>

        <p
          className="fs-5 mb-3"
          style={{ lineHeight: '1.8rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          Copying homework or combining multiple sources produces <strong>unoriginal work</strong>. The bigger issue is that AI is now copying human art, which is created from <strong>experience, lessons, and emotion</strong>.
        </p>

        <p
          className="fs-5 mb-3"
          style={{ lineHeight: '1.8rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          <strong>Founded by Rishi Murali and Gavin Wang</strong>, our online marketplace celebrates authentic student artwork. We showcase the creativity of high school artists, provide recognition, and ensure they earn meaningful rewards for their work.
        </p>

        <p
          className="fs-5 mb-3"
          style={{ lineHeight: '1.8rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          To date, we have supported <strong>dozens of student artists</strong> and left a measurable impact on our local community. Our mission is to honor human creativity, amplify student voices through art, and inspire others to explore their own <strong>artistic potential</strong>.
        </p>
      </Container>
    </div>
  );
};

export default About;
