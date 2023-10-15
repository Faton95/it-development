import Button from "@/components/Button";
import Card from "@/components/Card";
import Hashtags from "@/components/Hashtags";
import AutoplayCarousel from "@/components/InfiniteCarusel";
import { Container, Row, Col } from "react-bootstrap";

const courses = {
  0: {
    imgUrl: "/icons/logos/AWS.svg",
    title: "1",
  },
  1: {
    imgUrl: "/icons/logos/Behance.svg",
    title: "1",
  },
  2: {
    imgUrl: "/icons/logos/ClickUp.svg",
    title: "1",
  },
  3: {
    imgUrl: "/icons/logos/CodePen.svg",
    title: "1",
  },
  4: {
    imgUrl: "/icons/logos/Dribbble.svg",
    title: "1",
  },
  5: {
    imgUrl: "/icons/logos/Webflow.svg",
    title: "1",
  },
};

const Courses = ({ itCourses }) => {
  return (
    <div className='background'>
      <Container className='text-center'>
        <div className='h-2 m-t-160 m-b-40'>{itCourses.itCoursesTitle}</div>
        <Row>
          <Col md='8'>
            <Row>
              <Col md='6' sm='12'>
                <Card classes='background-light-blue-50 p-t-66 p-b-66'>
                  <div className='h-2'>
                    250<span className='blue'>+</span>
                  </div>
                  <div className='pr-1'>{itCourses.educationCenters}</div>
                </Card>
              </Col>
              <Col md='6' sm='12'>
                <Card classes='background-light-blue-50 p-t-66 p-b-66'>
                  <div className='h-2'>
                    140,000<span className='blue'>+</span>
                  </div>
                  <div className='pr-1'>{itCourses.students}</div>
                </Card>
              </Col>
            </Row>
            <br />
            <Card classes='background-light-blue-50'>
              <Row>
                <Col
                  md='6'
                  sm='12'
                  className='d-flex gap-2 flex-wrap p-t-25 p-l-25 p-b-25'
                >
                  <Hashtags>Backend</Hashtags>
                  <Hashtags>Designer</Hashtags>
                  <Hashtags>3D artist</Hashtags>
                  <Hashtags>Project manager</Hashtags>
                  <Hashtags>Frontend</Hashtags>
                  <Hashtags>Marketing</Hashtags>
                  <Hashtags>Data engineer</Hashtags>
                  <Hashtags>DevOps</Hashtags>
                  <Hashtags>System admin</Hashtags>
                  <Hashtags>HR</Hashtags>
                </Col>
                <Col md='6' sm='12'>
                  <div className='p-t-66 p-b-66'>
                    <div className='h-2'>
                      4,700<span className='blue'>+</span>
                    </div>
                    <div className='pr-1'>{itCourses.itCoursesGratuates}</div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md='4'>
            <Card classes='background-light-blue-50 p-t-32 p-b-32'>
              <div>
                <AutoplayCarousel list={courses} classes='carouselTrackRight' />
                <br />
                <AutoplayCarousel list={courses} classes='carouselTrackLeft' />
                <br />
                <AutoplayCarousel list={courses} classes='carouselTrackRight' />
                <br />
                <AutoplayCarousel list={courses} classes='carouselTrackLeft' />
              </div>
              <div className='h-2 m-t-40'>
                300<span className='blue'>+</span>
              </div>
              <div className='pr-1'>{itCourses.Courses}</div>
            </Card>
          </Col>
        </Row>
        <Button classes='m-t-40'>{itCourses.viewCourses}</Button>
      </Container>
    </div>
  );
};

export default Courses;
