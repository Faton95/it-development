import { Container, Row, Col, Card } from "react-bootstrap";
import Hashtags from "@/components/Hashtags";
import Image from "next/image";
import Button from "@/components/Button";

const universities = [
  {
    id: 1,
    name: "Inha University in Tashkent",
    address: "Mirzo Ulugbek, Tashkent",
    price: "28 mln",
    faculties: ["SOCIE", "SOL"],
    phoneNumber: "+99897 777 77 77",
  },
  {
    id: 2,
    name: "Inha University in Tashkent",
    address: "Mirzo Ulugbek, Tashkent",
    price: "28 mln",
    faculties: ["SOCIE", "SOL"],
    phoneNumber: "+99897 777 77 77",
  },
  {
    id: 3,
    name: "Inha University in Tashkent",
    address: "Mirzo Ulugbek, Tashkent",
    price: "28 mln",
    faculties: ["SOCIE", "SOL"],
    phoneNumber: "+99897 777 77 77",
  },
];
const Universities = ({ data }) => {
  return (
    <div className='background'>
      <Container className='text-center'>
        <div className='h-2 text-center m-t-45 m-b-32'>
          {data.itUniversitiesTitle}
        </div>
        <Row>
          {universities.map((item) => (
            <Col key={item.id} md='4' sm='12'>
              <Card>
                {/* <Card.Img variant='top' src='/images/university.png' />
                <Card.Body>
                  <Card.Title className='text-start pr-1'>
                    {item.name}
                  </Card.Title>
                  <Card.Title className='text-start pr-3 d-flex align-items-center gap-1'>
                    <Image
                      src='/icons/Location.svg'
                      alt='Location'
                      height={20}
                      width={20}
                    />
                    {item.address}
                  </Card.Title>
                  <Card.Text className='text-start pr-3 d-flex align-items-center gap-1'>
                    <Image
                      src='/icons/Wallet.svg'
                      alt='Location'
                      height={20}
                      width={20}
                    />
                    From {item.price}
                  </Card.Text>
                  <Card.Text className='text-start d-flex gap-2'>
                    {item.faculties.map((item) => (
                      <Hashtags
                        classes='pr-5 background-light-blue-50'
                        key='item'
                      >
                        {item}
                      </Hashtags>
                    ))}
                  </Card.Text>
                </Card.Body>
                <Card.Body className='text-start d-flex gap-3'>
                  <Image
                    src='/icons/Call.svg'
                    alt='call'
                    height={20}
                    width={20}
                  />
                  <Image
                    src='/icons/Message.svg'
                    alt='message'
                    height={20}
                    width={20}
                  />
                  <Image
                    src='/icons/Chat.svg'
                    alt='chat'
                    height={20}
                    width={20}
                  />
                </Card.Body> */}
              </Card>
            </Col>
          ))}
        </Row>
        <Button classes='m-t-50'>{data.allUniversities}</Button>
      </Container>
    </div>
  );
};

export default Universities;
