import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';

function BankForm() {

  return (
    <Form>
      <Form.Select aria-label="Default select example">
        <option>select bank account</option>
        <option value="1">Awash</option>
        <option value="2">buna </option>
        <option value="3"></option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Account Number:</Form.Label>
        <Form.Control type="password" placeholder="Enter account" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount:</Form.Label>
        <Form.Control type="number" placeholder="Amount" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}
export default BankForm;
