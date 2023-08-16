import Hashtags from "@/components/Hashtags";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

import "./style.scss";

const CourseCardItem = ({ data }) => {
  const {
    image,
    schoolName,
    hashtags,
    description,
    address,
    website,
    phoneNumber,
    telegramLink,
  } = data;
  return (
    <Row className='sentersCard'>
      <Col md='3'>
        <div className='image-container'>
          <Image src={image} fill className='image' alt='card item' />
        </div>
      </Col>
      <Col md='9'>
        <div className='h-5'>{schoolName}</div>
        <div className='m-t-15 m-b-15 d-flex gap-2'>
          {hashtags.map((item) => (
            <Hashtags classes='background-light-blue-50 pr-5' key={item}>
              {item}
            </Hashtags>
          ))}
        </div>
        <div className='pr-4 senters-description'>{description}</div>
        <div className='pr-3 m-t-16 m-b-12'>{address}</div>
        <div className='d-flex gap-3 m-b-10'>
          <div className='d-flex align-items-center gap-1'>
            <Image
              src='/icons/Telegram.svg'
              alt='book'
              height={16}
              width={16}
            />
            <div className='pr-4'>{telegramLink}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Website.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{website}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Call.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{phoneNumber}</div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CourseCardItem;
