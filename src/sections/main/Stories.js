import CardLayout from "@/components/Card";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Hashtags from "@/components/Hashtags";
import RoundedButton from "@/components/Button/RoundedButton";
import Image from "next/image";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

export const data = [
  {
    title: "AAAAAAAAAA",
  },
  {
    title: "BBBBBBBBB",
  },
  {
    title: "CCCCCCCCC",
  },
  {
    title: "DDDDDDDDDD",
  },
  {
    title: "FFFFFFFF",
  },
  {
    title: "EEEEEEEEEE",
  },
];
function Pagination(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      {data.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            key={index}
            style={{
              height: 8,
              width: 8,
              borderRadius: "100%",
              marginLeft: 5,
              background: isCenterSlide ? "#2675EB" : "#E0E0E0",
            }}
          />
        );
      })}
    </div>
  );
}

const Slider = ({ dataIndex, data, isCenterSlide, slideIndex }) => (
  <Container draggable={false}>
    <Row>
      <Col md='8' sm='12'>
        <div className='text-start h-3'>{data?.[dataIndex]?.title}</div>
        <div className='text-start pr-2 m-t-20 m-b-48'>
          A front-end developer creates user interfaces for websites and
          applications <br /> using HTML, CSS, and JavaScript. They collaborate
          with designers and back
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
  </Container>
);

const Stories = ({ data }) => {
  const ref = React.useRef();
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };
  return (
    <div className='background-grey'>
      <Container className='text-center'>
        <div className='h-2 p-t-40 p-b-40'>{data}</div>
        <div style={{ width: "100%", position: "relative" }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  data={data}
                  carouselWidth={width}
                  slideWidth={width}
                  slideComponent={Slider}
                  maxVisibleSlide={3}
                  currentVisibleSlide={1}
                  onActiveSlideChange={onCenterSlideDataIndexChange}
                />
              );
            }}
          />
        </div>

        <Row className='m-t-25 p-b-16'>
          <Col md='8' sm='12' className='text-start'>
            <div className='pr-3'>Powered by ITPARK</div>
          </Col>
          <Col
            md='4'
            sm='12'
            className='d-flex justify-content-between align-items-center'
          >
            <Pagination centerSlideDataIndex={centerSlideDataIndex} />
            <div className='d-flex gap-3'>
              <RoundedButton>
                <Image
                  src='/icons/Arrow-Left.svg'
                  alt='arrow-left'
                  height={24}
                  width={24}
                  onClick={() => {
                    ref.current?.goBack();
                  }}
                />
              </RoundedButton>
              <div
                onClick={() => {
                  ref.current?.goNext(3);
                }}
              >
                <RoundedButton>
                  <Image
                    src='/icons/Arrow-Right.svg'
                    alt='arrow-left'
                    height={24}
                    width={24}
                  />
                </RoundedButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stories;
