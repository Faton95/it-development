import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const UsefulLinks = ({ data, withTitle = true }) => {
  return (
    <Container>
      {withTitle && (
        <div className='h-2 text-center m-t-160 m-b-40'>Useful links</div>
      )}
      <Row className='gy-4'>
        {data.map((item) => (
          <Col key={item.title} md='6' sm='12'>
            <div className='usefulCard'>
              <div>
                <div className='h-4'>{item.title}</div>
                <div className='pr-2 w-75'>{item.description}</div>
              </div>
              <div>
                <Image
                  src={`/icons/${item.icon}.svg`}
                  alt={item.icon}
                  height={120}
                  width={120}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsefulLinks;
