import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";

const CourseCardItem = ({ data }) => {
  const {
    image,
    fullName,
    position,
    dxCode,
    stir,
    jshir,
    phoneNumber,
    workName,
    workStir
  } = data;
  return (
    <Row className={styles.sentersCard}>
      <Col md='2'>
        <picture>
          <img
            alt='image'
            src={image}
            style={{borderRadius: 8, height: 140, width: 140, objectFit: 'cover', }}
          />
        </picture>
      </Col>
      <Col md='10'>
        <div className='h-5'>{fullName}</div>
        <span className="d-flex align-items-center gap-1 h-7 blue">
        {/* <Image src='/icons/position.svg' alt='book' height={20} width={20} /> */}
          {position}
          </span>
        <div className='pr-3 m-t-5 m-b-5 d-flex align-items-center gap-5'>
          <div><span className="fw-bold">СТИР: </span>{stir}</div>
          <div><span className="fw-bold">ЖШШИР:</span> {jshir}</div>
          <div><span className="fw-bold">Телефон:</span> {phoneNumber}</div>
        </div>
        <div className='d-flex gap-3 flex-wrap'>
          <div className='d-flex align-items-center gap-1'>
            <Image
              src='/icons/wallet.svg'
              alt='book'
              height={20}
              width={20}
            />
            <div className='pr-3'><span className="fw-bold">Иш берувчи СТИРи: </span>{workStir}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/key.svg' alt='book' height={20} width={20} />
            <div className='pr-3'><span className='fw-bold'>ДХ коди: </span> {dxCode}</div>
          </div>
        </div>
        <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/building.svg' alt='book' height={20} width={20} />
            <div className='pr-3 text-nowrap'><span className='fw-bold'>Иш берувчининг номи: </span>{workName}</div>
          </div>
      </Col>
    </Row>
  );
};

export default CourseCardItem;
