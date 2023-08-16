import SentersCardItem from "./SentersCardItem";
import { Row, Col, Form } from "react-bootstrap";

const data = [
  {
    id: 1,
    image: "/images/it-center.jpg",
    schoolName: "Profi school",
    hashtags: ["Backend", "Frontend", "Accounting", "Design", "+4 other"],
    description:
      "At the heart of our IT Center lies a clear and ambitious mission: to foster a thriving ecosystem of IT knowledge and expertise. Whether you 're a seasoned IT professional seeking to enhance your skills.",
    address: "Mirzo Ulugbek, Tashkent",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 2,
    image: "/images/it-center.jpg",
    schoolName: "Profi school",
    hashtags: ["Backend", "Frontend", "Accounting", "Design", "+4 other"],
    description:
      "At the heart of our IT Center lies a clear and ambitious mission: to foster a thriving ecosystem of IT knowledge and expertise. Whether you 're a seasoned IT professional seeking to enhance your skills.",
    address: "Mirzo Ulugbek, Tashkent",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 3,
    image: "/images/it-center.jpg",
    schoolName: "Profi school",
    hashtags: ["Backend", "Frontend", "Accounting", "Design", "+4 other"],
    description:
      "At the heart of our IT Center lies a clear and ambitious mission: to foster a thriving ecosystem of IT knowledge and expertise. Whether you 're a seasoned IT professional seeking to enhance your skills.",
    address: "Mirzo Ulugbek, Tashkent",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 4,
    image: "/images/it-center.jpg",
    schoolName: "Profi school",
    hashtags: ["Backend", "Frontend", "Accounting", "Design", "+4 other"],
    description:
      "At the heart of our IT Center lies a clear and ambitious mission: to foster a thriving ecosystem of IT knowledge and expertise. Whether you 're a seasoned IT professional seeking to enhance your skills.",
    address: "Mirzo Ulugbek, Tashkent",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 5,
    image: "/images/it-center.jpg",
    schoolName: "Profi school",
    hashtags: ["Backend", "Frontend", "Accounting", "Design", "+4 other"],
    description:
      "At the heart of our IT Center lies a clear and ambitious mission: to foster a thriving ecosystem of IT knowledge and expertise. Whether you 're a seasoned IT professional seeking to enhance your skills.",
    address: "Mirzo Ulugbek, Tashkent",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
  {
    id: 6,
    image: "/images/it-center.jpg",
    schoolName: "Profi school",
    hashtags: ["Backend", "Frontend", "Accounting", "Design", "+4 other"],
    description:
      "At the heart of our IT Center lies a clear and ambitious mission: to foster a thriving ecosystem of IT knowledge and expertise. Whether you 're a seasoned IT professional seeking to enhance your skills.",
    address: "Mirzo Ulugbek, Tashkent",
    website: "profiedu.uz",
    phoneNumber: "+998 99 999 99 99",
    telegramLink: "t.me/profiedu.uz",
  },
];
const SentersCardList = () => {
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
      <div className='d-flex flex-column gap-4 m-l-12'>
        {data?.map((item) => (
          <SentersCardItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default SentersCardList;
