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
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";
import { useRouter } from "next/router";

export const data1 = [
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
      {props?.amount?.map((_, index) => {
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
        <div className='text-start h-3'>{data[dataIndex].attributes.title}</div>
        <div className='text-start pr-2 m-t-20 m-b-48'>
          {data[dataIndex].attributes.description}
        </div>
        <Row>
          <Col md='6'>
            <CardLayout classes='p-t-40 p-b-40 background-white'>
              <div className='pr-1'>Average salary</div>
              <div className='h-2 m-t-8 m-b-16'>
                {data[dataIndex].attributes.firstSalary}
                <span className='blue'>+</span>
              </div>
              <Hashtags classes='pr-3'>
                {data[dataIndex].attributes.firstHashtag}
              </Hashtags>
            </CardLayout>
          </Col>
          <Col md='6'>
            <CardLayout classes='p-t-40 p-b-40 background-light-blue'>
              <div className='pr-1'>Average salary</div>
              <div className='h-2 m-t-8 m-b-16'>
                {data[dataIndex].attributes.secondSalary}
                <span className='blue'>+</span>
              </div>
              <Hashtags classes='pr-3'>
                {data[dataIndex].attributes.secondHashtag}
              </Hashtags>
            </CardLayout>
          </Col>
        </Row>
      </Col>
      <Col md='4' sm='12'>
        <Card className='text-start min-vh-20 max-vh-20'>
          <picture>
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data[dataIndex].attributes.image.data.attributes.url}`}
              alt='profile pic'
              width='100%'
              height='225px'
              style={{maxHeight: 250}}
            />
          </picture>
          <div className='m-t-16 m-l-16 pr-4'>Student</div>
          <div className='m-t-8 m-l-16 pr-1'>
            {data[dataIndex].attributes.studentName}
          </div>
          <div className='m-t-12 m-l-16 m-r-16 pr-3'>
            {data[dataIndex].attributes.studentInfo}
          </div>
          <div className='m-t-20 m-l-16 m-b-16'>
            <Hashtags classes='m-r-5 pr-5'>
              {data[dataIndex].attributes.region}
            </Hashtags>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
);

const Stories = ({ title }) => {
  const router = useRouter();
  const ref = React.useRef();
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);

  const { locale } = router;
  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/successful-stories?populate=*&locale=${locale}`,
    fetcher
  );

  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };
  return (
    <div className='background-grey'>
      <Container className='text-center'>
        <div className='h-2 p-t-40 p-b-40'>{title}</div>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div style={{ width: "100%", position: "relative" }}>
            <ResponsiveContainer
              carouselRef={ref}
              render={(width, carouselRef) => {
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    data={data?.data}
                    carouselWidth={width}
                    slideWidth={width}
                    slideComponent={Slider}
                    maxVisibleSlide={1}
                    currentVisibleSlide={1}
                    onActiveSlideChange={onCenterSlideDataIndexChange}
                  />
                );
              }}
            />
          </div>
        )}

        <Row className='m-t-25 p-b-16'>
          <Col md='8' sm='12' className='text-start'>
            <div className='pr-3'>Powered by ITPARK</div>
          </Col>
          <Col
            md='4'
            sm='12'
            className='d-flex justify-content-between align-items-center'
          >
            <Pagination
              amount={data?.data}
              centerSlideDataIndex={centerSlideDataIndex}
            />
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
