import Layout from "@/components/Test/TestLayout";
import { Container, Row, Col, Form } from "react-bootstrap";
import SentersCardList from "@/components/Test/TestSentersCard";
import Filter from "@/components/Test/TestFilter";

export default function Senters() {
  return (
    <Layout>
      <Container className='m-t-20'>
        <Row>
          <Col md='3'>
            <Filter />
          </Col>
          <Col md='9'>
            <SentersCardList />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}