import { Container, Nav, Form, Navbar } from "react-bootstrap";
import Logo from "../../../../public/logo-oz.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const lang = {
  en: {
    courses: "Бош саҳифа",
    programs: "Хабарлар",
    centers: "Тизим бўйича ёрдам",
  },
  ru: {
    courses: "Бош саҳифа",
    programs: "Хабарлар",
    centers: "Тизим бўйича ёрдам",
  },
  uz: {
    courses: "Бош саҳифа",
    programs: "Хабарлар",
    centers: "Тизим бўйича ёрдам",
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
      <Container>
        <Navbar expand='md'>
          <Navbar.Brand
            className='m-r-80'
            href={isStudent ? `/${locale}` : `/${locale}/business`}
          >
            <Image
              priority
              src={Logo}
              alt='IT development Logo'
              width={230}
              height={70}
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
