// src/pages/Contact.tsx
import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <Container fluid className="container-center">
        <Card className="contact-card text-light">
          <Card.Body>
            <h3>Contact Us</h3>
            <h5>Email: contact@organicolors.org</h5>
            <Form>
              <Form.Group className="form-group-inline mb-3">
                <Form.Control type="text" placeholder="Name" />
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <br/><br/><br/><br/><br/><br/>
    </section>
  );
};

export default Contact;
