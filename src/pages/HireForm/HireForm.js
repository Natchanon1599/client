import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios

const HireForm = ({ show, handleClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract form data
    const formData = {
      name: event.target.elements.formName.value,
      company: event.target.elements.formCompany.value,
      email: event.target.elements.formEmail.value,
      message: event.target.elements.formMessage.value,
    };

    try {
      // Make POST request using axios
      const response = await axios.post('http://localhost:5000/api/hire', formData);

      console.log(response.data); // Log the response from the server
      handleClose(); // Close the modal on success
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.'); // User feedback
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hire Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="formName" type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="formCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control name="formCompany" type="text" placeholder="Enter your company" required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="formEmail" type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control name="formMessage" as="textarea" rows={3} placeholder="Your message" required />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HireForm;
