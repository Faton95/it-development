import CourseCardItem from "./CourseCardItem";
import { Row, Col, Form } from "react-bootstrap";

const CourseCardList = ({ courses }) => {

  return (
    <>
      <Row className='gy-4'>
        {courses?.data?.map((course) => (
          <Col key={course?.id} md='3' sm='6' xs='12'>
            <CourseCardItem data={course?.attributes} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CourseCardList;
