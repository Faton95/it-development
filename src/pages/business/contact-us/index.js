import { useState } from "react";
import Layout from "@/components/Layout";
import { Container, Button, Form } from "react-bootstrap";

export default function Senters() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Layout>
      <Container className='m-t-50 text-center d-flex flex-column justify-content-center w-50'>
        <div className='h-1'>
          Have a questions? <br />
          Contact us
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group
            controlId='validationCustom01'
            className='text-start m-t-80 m-b-40'
          >
            <Form.Label>Full name</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter full name...'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='validationCustom02' className='text-start'>
            <Form.Label>Email</Form.Label>
            <Form.Control required type='email' placeholder='Email address' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            controlId='validationCustom02'
            className='text-start m-t-40 m-b-40'
          >
            <Form.Label>How can we help?</Form.Label>
            <Form.Control
              required
              as='textarea'
              rows={5}
              placeholder='Enter your message here'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </Layout>
  );
}
