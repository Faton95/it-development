import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../public/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const studentLinks = [
  {
    title: "Courses",
    link: "/courses",
  },
  {
    title: "IT centres",
    link: "/centers",
  },
  {
    title: "Programs",
    link: "/programs",
  },
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "Contact us",
    link: "/contact-us",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const businessLinks = [
  {
    title: "Contact us",
    link: "/business/contact-us",
  },
  {
    title: "FAQ",
    link: "/business/faq",
  },
];

const Index = () => {
  const router = usePathname();

  const isStudent = !router.includes("/business");

  return (
    <>
      <Navbar className='background-blue'>
        <Container className='d-flex justify-content-start gap-3 '>
          <Link
            href='/'
            className={`white text-decoration-none ${
              router.includes("/business") ? "p-t-8 p-b-8" : "underLine"
            } m-r-20`}
          >
            For students
          </Link>
          <Link
            href='/business'
            className={`white text-decoration-none ${
              router.includes("/business") ? "underLine" : "p-t-8 p-b-8"
            }`}
          >
            For business
          </Link>
        </Container>
      </Navbar>
      <Container>
        <Navbar expand='md' className='p-t-20 p-b-20 gap-5'>
          <Navbar.Brand className='m-r-80' href={isStudent ? "/" : "/business"}>
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
            <Nav className='me-auto text-center gap-5 m-t-8'>
              {(isStudent ? studentLinks : businessLinks).map((item) => (
                <Nav.Link
                  className={`p-0 ${router === item.link && "active-link"}`}
                  key={item.link}
                  href={item.link}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Form.Select
                className='border-0'
                aria-label='Default select example'
              >
                <option value='1'>ENG</option>
                <option value='2'>RUS</option>
                <option value='3'>UZB</option>
              </Form.Select>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Index;
