import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Index = () => {
  return (
    <div className='dark-blue white m-t-160 p-t-40 p-b-32 pr-3'>
      <Container>
        <Row className='p-b-40'>
          <Col md='3' xs='6'>
            <Image
              src='/icons/LogoWhite.svg'
              alt='white-logo'
              height={22}
              width={164}
            />
            <div className='m-t-12 m-b-35'>Powered by ITPARK</div>
            <div className='d-flex align-items-center gap-2'>
              <Image
                src='/icons/CallWhite.svg'
                alt='white-logo'
                height={16}
                width={16}
              />
              <div>+998 71 209 11 99</div>
            </div>
            <div className='m-t-16 m-b-16 d-flex align-items-center gap-2'>
              <Image
                src='/icons/MessageWhite.svg'
                alt='white-logo'
                height={16}
                width={16}
              />
              <div>info@edu.it-park.uz</div>
            </div>
            <div className='w-75 d-flex gap-2'>
              <Image
                src='/icons/LocationWhite.svg'
                alt='white-logo'
                height={16}
                width={16}
                className='m-t-5'
              />
              <div>4, Tepamasjid str., Tashkent, Uzbekistan, 100164</div>
            </div>
          </Col>
          <Col md='3' xs='6'>
            <div className='grey'>For Students</div>
            <div className='m-t-20 m-b-12'>Courses</div>
            <div>Edu Centres</div>
            <div className='m-t-12 m-b-12'>Programs</div>
            <div>About us</div>
            <div className='m-t-12 m-b-12'>Contact us</div>
            <div>FAQ</div>
          </Col>
          <Col md='3' xs='6'>
            <div className='grey'>For Business</div>
            <div className='m-t-20 m-b-12'>Login</div>
            <div>Contact us</div>
            <div className='m-t-12'>FAQ</div>
          </Col>
          <Col md='3' xs='6'>
            <div className='grey'>Languages</div>
            <div className='m-t-20 m-b-12'>English</div>
            <div>Uzbek</div>
            <div className='m-t-12'>Russian</div>
          </Col>
        </Row>
        <Row className='border-top p-t-35'>
          <Col md='11' className='d-flex gap-4'>
            <div>© 2023 IT Park. All rights reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Settings</div>
          </Col>
          <Col md='1' className='d-flex gap-3'>
            <Image
              src='/icons/Facebook.svg'
              alt='white-logo'
              height={24}
              width={24}
            />
            <Image
              src='/icons/Instagram.svg'
              alt='white-logo'
              height={24}
              width={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='white-logo'
              height={24}
              width={24}
            />
            <Image
              src='/icons/LinkedIn.svg'
              alt='white-logo'
              height={24}
              width={24}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
