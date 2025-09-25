import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with actual form handling logic
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4" style={{ color: "#2c3e50", fontWeight: "700" }}>
        Contact Us
      </h1>
      <Row>
        <Col md={6} className="mb-4">
          <h4>Get in Touch</h4>
          <p>
            Have any questions? We would love to hear from you. 
            Fill out the form and we will get back to you shortly.
          </p>
          <p>
            <strong>Email:</strong> info@doctormanagement.com <br />
            <strong>Phone:</strong> +91 123 456 7890 <br />
            <strong>Address:</strong> 123, Health Street, Bhopal, India
          </p>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
