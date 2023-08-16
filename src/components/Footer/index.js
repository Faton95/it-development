import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <div className='dark-blue white m-t-160 p-t-40 p-b-32'>
      <Container>
        <Row>
          <Col md='3' xs='6'>
            <div>IT Education</div>
            <div>Powered by ITPARK</div>
            <div>+998 71 209 11 99</div>
            <div>info@edu.it-park.uz</div>
            <div>4, Tepamasjid str., Tashkent, Uzbekistan, 100164</div>
          </Col>
          <Col md='3' xs='6'>
            <div className='text'>For Students</div>
            <div>Courses</div>
            <div>Edu Centres</div>
            <div>Programs</div>
            <div>About us</div>
            <div>Contact us</div>
            <div>FAQ</div>
          </Col>
          <Col md='3' xs='6'>
            <div className='text'>For Business</div>
            <div>Login</div>
            <div>Contact us</div>
            <div>FAQ</div>
          </Col>
          <Col md='3' xs='6'>
            <div className='text'>Languages</div>
            <div>English</div>
            <div>Uzbek</div>
            <div>Russian</div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-between'>
          <Col className='d-flex gap-5'>
            <div>© 2023 IT Park. All rights reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Settings</div>
          </Col>
          <Col className='d-flex gap-3'>
            <div>F</div>
            <div>I</div>
            <div>T</div>
            <div>L</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
