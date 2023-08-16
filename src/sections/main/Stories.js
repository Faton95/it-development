import CardLayout from "@/components/Card";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Hashtags from "@/components/Hashtags";
import RoundedButton from "@/components/Button/RoundedButton";
import Image from "next/image";

const Stories = () => {
  return (
    <div className='background-grey'>
      <Container className='text-center'>
        <div className='h-2 p-t-40 p-b-40'>Successful stories</div>
        <Row>
          <Col md='8' sm='12'>
            <div className='text-start h-3'>Front end developer</div>
            <div className='text-start pr-2 m-t-20 m-b-48'>
              A front-end developer creates user interfaces for websites and
              applications <br /> using HTML, CSS, and JavaScript. They
              collaborate with designers and back
              <br />
              -end developers to ensure smooth integration and a great user
              experience.
            </div>
            <Row>
              <Col md='6'>
                <CardLayout classes='p-t-40 p-b-40 background-white'>
                  <div className='pr-1'>Average salary</div>
                  <div className='h-2 m-t-8 m-b-16'>
                    4,000,000<span className='blue'>+</span>
                  </div>
                  <Hashtags classes='pr-3'>JuniorDeveloper</Hashtags>
                </CardLayout>
              </Col>
              <Col md='6'>
                <CardLayout classes='p-t-40 p-b-40 background-light-blue'>
                  <div className='pr-1'>Average salary</div>
                  <div className='h-2 m-t-8 m-b-16'>
                    10,000,000<span className='blue'>+</span>
                  </div>
                  <Hashtags classes='pr-3'>MiddleDeveloper</Hashtags>
                </CardLayout>
              </Col>
            </Row>
          </Col>
          <Col md='4' sm='12'>
            <Card>
              <Card.Img variant='top' src='/images/student.jpg' />
              <Card.Body>
                <Card.Title className='text-start'>Student</Card.Title>
                <Card.Title className='text-start'>Abror Jurayev</Card.Title>
                <Card.Text className='text-start'>
                  How to Become a Senior Developer During Your Student Years
                </Card.Text>
              </Card.Body>
              <Card.Body className='d-flex gap-1'>
                <Hashtags classes='pr-5'>Tashkent</Hashtags>
                <Hashtags classes='pr-5'>FrontEnd</Hashtags>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='m-t-25 p-b-16'>
          <Col md='8' sm='12' className='text-start'>
            <div className='pr-3'>Powered by ITPARK</div>
          </Col>
          <Col
            md='4'
            sm='12'
            className='d-flex justify-content-between align-items-center'
          >
            <Image
              src='/images/dots.png'
              alt='arrow-left'
              height={8}
              width={64}
            />
            <div className='d-flex gap-3'>
              <RoundedButton>
                <Image
                  src='/icons/Arrow-Left.svg'
                  alt='arrow-left'
                  height={24}
                  width={24}
                />
              </RoundedButton>
              <RoundedButton>
                <Image
                  src='/icons/Arrow-Right.svg'
                  alt='arrow-left'
                  height={24}
                  width={24}
                />
              </RoundedButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stories;
