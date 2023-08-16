import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../public/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Navbar className='background-blue'>
        <Container className='d-flex justify-content-start gap-3'>
          <Link href='/' className='white text-decoration-none'>
            For students
          </Link>
          <Link href='/business' className='white text-decoration-none'>
            For business
          </Link>
        </Container>
      </Navbar>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>
            <Image
              priority
              src={Logo}
              alt='IT development Logo'
              width='130px'
              height='17px'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/courses'>Courses</Nav.Link>
              <Nav.Link href='/centers'>IT centres</Nav.Link>
              <Nav.Link href='/programs'>Programs</Nav.Link>
              <Nav.Link href='#link'>About us</Nav.Link>
              <Nav.Link href='#home'>Contact us</Nav.Link>
              <Nav.Link href='#link'>FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Form.Select aria-label='Default select example'>
                <option value='1'>ENG</option>
                <option value='2'>RUS</option>
                <option value='3'>UZB</option>
              </Form.Select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
