import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_k2o0077',  // replace with your EmailJS service ID
      'template_q9cy6ih', // replace with your EmailJS template ID
      e.currentTarget,
      'YTUe9cCdRb4JI_VGG-'   // replace with your EmailJS public key
    )
    .then(
      () => {
        setStatus('Message sent successfully!');
        e.currentTarget.reset();
      },
      (error) => {
        setStatus('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact-section bg-dark text-light py-5">
      <Container className="w-75">
        <Card className="contact-card bg-secondary text-light">
          <Card.Body>
            <h3 className="mb-3">Contact Us</h3>
            <p>You can reach out to us to purchase artwork from our gallery or for any inquiries about the platform.</p>
            <h5>Email: organicolors8@gmail.com</h5>

            {status && <Alert variant={status.includes('successfully') ? 'success' : 'danger'}>{status}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Name" name="user_name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Email" name="user_email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" name="message" required />
              </Form.Group>
              <Button variant="primary" type="submit">Send Message</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
