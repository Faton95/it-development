import Card from "@/components/Card";
import { Col, Row, Container } from "react-bootstrap";

const EducationInfo = ({ educationInfo }) => {
  return (
    <Container className='text-center m-t-160'>
      <Row className='gy-4'>
        <Col md='6' sm='12'>
          <Card classes='background-light-grey p-t-35 p-r-40 p-b-40 p-l-40'>
            <div className='text-start h-2 m-b-16'>{educationInfo.title}</div>
            <div className='text-start pr-3'>{educationInfo.body}</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              47<span className='blue'>+</span>
            </div>
            <div className='pr-1'>{educationInfo.fullstack}</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              27<span className='blue'>%</span>
            </div>
            <div className='pr-1'>{educationInfo.itFoundation}</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              12<span className='blue'>%</span>
            </div>
            <div className='pr-1'>{educationInfo.design}</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              4<span className='blue'>%</span>
            </div>
            <div className='pr-1'>{educationInfo.mobile}</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              2<span className='blue'>%</span>
            </div>
            <div className='pr-1'>{educationInfo.robotecnics}</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              8<span className='blue'>%</span>
            </div>
            <div className='pr-1'>{educationInfo.other}</div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationInfo;
