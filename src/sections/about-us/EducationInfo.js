import Card from "@/components/Card";
import { Col, Row, Container } from "react-bootstrap";

const EducationInfo = () => {
  return (
    <Container className='text-center m-t-160'>
      <Row className='gy-4'>
        <Col md='6' sm='12'>
          <Card classes='background-light-grey p-t-35 p-r-40 p-b-40 p-l-40'>
            <div className='text-start h-2 m-b-16'>IT education in numbers</div>
            <div className='text-start pr-3'>
              In 2023, more than <span className='blue'>14,300</span> students
              graduated from resident companies, and the number of graduating IT
              products was more than
              <span className='blue'> 5,190</span>. <br />
              IT Park resident companies offer more than 400 IT courses
            </div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              250<span className='blue'>+</span>
            </div>
            <div className='pr-1'>Education Centers</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              250<span className='blue'>%</span>
            </div>
            <div className='pr-1'>Education Centers</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              250<span className='blue'>%</span>
            </div>
            <div className='pr-1'>Education Centers</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              250<span className='blue'>%</span>
            </div>
            <div className='pr-1'>Education Centers</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              250<span className='blue'>%</span>
            </div>
            <div className='pr-1'>Education Centers</div>
          </Card>
        </Col>
        <Col md='3' sm='6'>
          <Card classes='background-light-blue-50 p-t-66 p-b-66'>
            <div className='h-2'>
              250<span className='blue'>%</span>
            </div>
            <div className='pr-1'>Education Centers</div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationInfo;
