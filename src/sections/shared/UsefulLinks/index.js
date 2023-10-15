import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";

const UsefulLinks = ({ data, withTitle = true }) => {
  return (
    <Container>
      {withTitle && (
        <div className='h-2 text-center m-t-160 m-b-40'>
          {data.usefulLinksTitle}
        </div>
      )}
      <Row className='g-4 m-t-50'>
        {data.usefulLinksData.map((item, index) => (
          <Col key={index} md='6' sm='12'>
            <Row className={styles.usefulCard}>
              <Col md='9' sm='12'>
                <div className='h-4 m-b-10'>{item.title}</div>
                <div className='pr-2'>{item.description}</div>
              </Col>
              <Col md='3' sm='12'>
                <Image
                  src={`/icons/${item.icon}.svg`}
                  alt={item.icon}
                  height={120}
                  width={120}
                />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsefulLinks;
