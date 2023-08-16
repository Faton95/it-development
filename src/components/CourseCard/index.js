import CourseCardItem from "./CourseCardItem";
import { Row, Col, Form } from "react-bootstrap";

const data = [
  {
    id: 1,
    image: "/images/university.png",
    schoolName: "Profi school",
    courseName: "Create beautiful websites from the scratch ",
    price: "5,000,000 Uzs",
    studyType: "Online",
    level: "Beginner",
    duration: "2 month",
    skill: "Frontend",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 2,
    image: "/images/university.png",
    schoolName: "Profi school123",
    courseName: "Create beautiful websites from the scratch ",
    price: "5,000,000 Uzs",
    studyType: "Online",
    level: "Beginner",
    duration: "2 month",
    skill: "Frontend",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 3,
    image: "/images/university.png",
    schoolName: "Profi school",
    courseName: "Create beautiful websites from the scratch ",
    price: "5,000,000 Uzs",
    studyType: "Online",
    level: "Beginner",
    duration: "2 month",
    skill: "Frontend",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 1,
    image: "/images/university.png",
    schoolName: "Profi school",
    courseName: "Create beautiful websites from the scratch ",
    price: "5,000,000 Uzs",
    studyType: "Online",
    level: "Beginner",
    duration: "2 month",
    skill: "Frontend",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 2,
    image: "/images/university.png",
    schoolName: "Profi school123",
    courseName: "Create beautiful websites from the scratch ",
    price: "5,000,000 Uzs",
    studyType: "Online",
    level: "Beginner",
    duration: "2 month",
    skill: "Frontend",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 3,
    image: "/images/university.png",
    schoolName: "Profi school",
    courseName: "Create beautiful websites from the scratch ",
    price: "5,000,000 Uzs",
    studyType: "Online",
    level: "Beginner",
    duration: "2 month",
    skill: "Frontend",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
];
const CourseCardList = () => {
  return (
    <>
      <Row className='m-b-40'>
        <Col md='9'>
          <Form.Control type='text' placeholder='Search for courses...' />
        </Col>
        <Col md='3'>
          <Form.Select aria-label='Default select example'>
            <option>By region</option>
            <option value='1'>Tashkent</option>
            <option value='2'>Samarkand</option>
            <option value='3'>Bukhara</option>
          </Form.Select>
        </Col>
      </Row>
      <div className='d-flex justify-content-between flex-wrap gap-3'>
        {data.map((item) => (
          <CourseCardItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default CourseCardList;
