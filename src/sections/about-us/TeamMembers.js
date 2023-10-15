import Card from "@/components/Card";
import MemberCard from "@/components/MemberCard";
import { Container, Row, Col } from "react-bootstrap";

const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: "Asror Gulomov",
      position: "Team Leam",
      image: "profile1",
    },
    {
      id: 2,
      name: "Asror Gulomov",
      position: "Team Leam",
      image: "profile2",
    },
    {
      id: 3,
      name: "Asror Gulomov",
      position: "Team Leam",
      image: "profile1",
    },
    {
      id: 4,
      name: "Asror Gulomov",
      position: "Team Leam",
      image: "profile2",
    },
    // {
    //   id: 5,
    //   name: "Asror Gulomov",
    //   position: "Team Leam",
    //   image: "profile1",
    // },
    // {
    //   id: 6,
    //   name: "Asror Gulomov",
    //   position: "Team Leam",
    //   image: "profile2",
    // },
    // {
    //   id: 7,
    //   name: "Asror Gulomov",
    //   position: "Team Leam",
    //   image: "profile1",
    // },
    // {
    //   id: 8,
    //   name: "Asror Gulomov",
    //   position: "Team Leam",
    //   image: "profile2",
    // },
  ];
  return (
    <Container className='m-t-160'>
      <Row>
        <Col md='6' sm='12'>
          <Card classes='background-light-blue-50 p-t-40 p-l-40 p-r-40 p-b-40'>
            <div className='h-2 m-b-20'>Team members</div>
            <div className='pr-2'>
              Meet the Dedicated Minds Behind Our Success Our team is a diverse
              group of individuals who are united by a common goal: to deliver
              excellence in everything we do. Each member brings a unique set of
              skills, experiences, and perspectives to the table, creating a
              dynamic and innovative environment that drives our success.
            </div>
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Row className='gy-4'>
            {members.map((item) => (
              <Col key={item.id} md='6'>
                <MemberCard data={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamMembers;
