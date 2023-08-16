"use client";
import Layout from "@/components/Layout";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import { Container, Row, Col, Form } from "react-bootstrap";

const data = [
  {
    title: "OMUC",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Ticket",
  },
  {
    title: "Compensation for IT learning",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Graduated",
  },
  {
    title: "IT-Skills",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "ShieldDone",
  },
  {
    title: "IT-Bilim",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Brain",
  },
  {
    title: "OMUC",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Ticket",
  },
  {
    title: "Compensation for IT learning",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Graduated",
  },
  {
    title: "IT-Skills",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "ShieldDone",
  },
  {
    title: "IT-Bilim",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Brain",
  },
  {
    title: "OMUC",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Ticket",
  },
  {
    title: "Compensation for IT learning",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Graduated",
  },
  {
    title: "IT-Skills",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "ShieldDone",
  },
  {
    title: "IT-Bilim",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Brain",
  },
];

export default function Programs() {
  return (
    <Layout>
      <Container>
        <Row className='m-b-40 m-t-50'>
          <Col md='10'>
            <Form.Control type='text' placeholder='Search for useful link...' />
          </Col>
          <Col md='2'>
            <Form.Select aria-label='Default select example'>
              <option>By region</option>
              <option value='1'>Tashkent</option>
              <option value='2'>Samarkand</option>
              <option value='3'>Bukhara</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
      <UsefulLinks data={data} withTitle={false} />
    </Layout>
  );
}
