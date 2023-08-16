"use client";
import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SentersCardList from "@/components/SentersCard";
import Filter from "@/components/Filter";
import UsefulLinks from "@/sections/shared/UsefulLinks";

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
];

export default function Senters() {
  return (
    <Layout>
      <Container className='m-t-50'>
        <Row>
          <Col md='3'>
            <Filter />
          </Col>
          <Col md='9'>
            <SentersCardList />
          </Col>
        </Row>
        <UsefulLinks data={data} />
      </Container>
    </Layout>
  );
}
