import { Container, Nav, Form, Navbar } from "react-bootstrap";
import Logo from "../../../public/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const lang = {
  en: {
    courses: "Courses",
    centers: "It Centers",
    programs: "Programs",
    aboutUs: "About us",
    contactUs: "Contact us",
    faq: "FAQ",
    news: "News",
    students: "For students",
    business: "For business",
  },
  ru: {
    courses: "Курсы",
    centers: "IT центры",
    programs: "Программы",
    aboutUs: "О нас",
    contactUs: "Связаться с нами",
    faq: "FAQ",
    news: "Новости",
    students: "Для студентов",
    business: "Для бизнеса",
  },
  uz: {
    courses: "Kurslar",
    centers: "IT Markazlar",
    programs: "Dasturlar",
    aboutUs: "Biz haqimizda",
    contactUs: "Biz bilan bog'lanish",
    faq: "FAQ",
    news: "Yangiliklar",
    students: "O'quvchilarga",
    business: "Tadbirkorlarga",
  },
};

const languageOptions = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export default function Header() {
  const router = useRouter();
  const { locales, locale } = router;

  const studentLinks = [
    {
      title: lang[locale].courses,
      link: `/${locale}/courses`,
    },
    {
      title: lang[locale].centers,
      link: `/${locale}/centers`,
    },
    {
      title: lang[locale].programs,
      link: `/${locale}/programs`,
    },
    {
      title: lang[locale].aboutUs,
      link: `/${locale}/about-us`,
    },
    {
      title: lang[locale].contactUs,
      link: `/${locale}/contact-us`,
    },
    {
      title: lang[locale].faq,
      link: `/${locale}/faq`,
    },
    {
      title: lang[locale].news,
      link: `/${locale}/news`,
    },
  ];

  const businessLinks = [
    {
      title: lang[locale].contactUs,
      link: `/${locale}/business/contact-us`,
    },
    {
      title: lang[locale].faq,
      link: `/${locale}/business/faq`,
    },
  ];
  const isStudent = !router?.pathname?.includes("/business");
  const handleRouter = (e) => {
    const { pathname, query, asPath } = router;

    router.push({ pathname, query }, asPath, { locale: e.target.value });
  };

  return (
    <>
      <Navbar className='background-blue p-0'>
        <Container className='d-flex justify-content-start gap-3 '>
          <Link
            href='/'
            className={`white text-decoration-none ${
              router?.pathname?.includes("/business")
                ? "p-t-8 p-b-8"
                : styles.underLine
            } m-r-20`}
          >
            {lang[locale].students}
          </Link>
          <Link
            href='/business'
            className={`white text-decoration-none ${
              router?.pathname?.includes("/business")
                ? styles.underLine
                : "p-t-8 p-b-8"
            }`}
          >
            {lang[locale].business}
          </Link>
        </Container>
      </Navbar>
      <Container>
        <Navbar expand='md' className='p-t-20 p-b-20 gap-5'>
          <Navbar.Brand
            className='m-r-80'
            href={isStudent ? `/${locale}` : `/${locale}/business`}
          >
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
              {(isStudent ? studentLinks : businessLinks).map((item) => {
                return (
                  <Nav.Link
                    className={`p-0 ${
                      router.pathname === item.link && styles.activeLink
                    }`}
                    key={item.link}
                    href={item.link}
                  >
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Nav>
              <Form.Select
                className='border-0'
                aria-label='Default select example'
                value={locale}
                onChange={(e) => handleRouter(e)}
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {languageOptions[locale]}
                  </option>
                ))}
              </Form.Select>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}
