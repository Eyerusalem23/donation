import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Material() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control type="number" placeholder="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Enter Location:</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Material;