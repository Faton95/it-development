import Hashtags from "@/components/Hashtags";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

import styles from "./styles.module.scss";

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
    <Row className={styles.sentersCard}>
      <Col md='3' sm='12'>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            layout='fill'
            className={styles.image}
            alt='card item'
          />
        </div>
      </Col>
      <Col md='9' sm='12'>
        <div className='h-5'>{schoolName}</div>
        <div className='m-t-15 m-b-15 d-flex gap-2 flex-wrap'>
          {hashtags.map((item) => (
            <Hashtags classes='background-light-blue-50 pr-5' key={item}>
              {item}
            </Hashtags>
          ))}
        </div>
        <div className={`pr-4 ${styles.sentersDescription}`}>{description}</div>
        <div className='pr-3 m-t-16 m-b-12 d-flex align-items-center gap-1'>
          <Image
            src='/icons/Location.svg'
            alt='white-logo'
            height={20}
            width={20}
          />
          <div>{address}</div>
        </div>
        <div className='d-flex gap-3 m-b-10 flex-wrap'>
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
