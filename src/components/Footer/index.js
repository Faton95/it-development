import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const lang = {
  en: {
    courses: "Courses",
    centers: "It Centers",
    programs: "Programs",
    aboutUs: "About us",
    contactUs: "Contact us",
    faq: "FAQ",
    students: "For students",
    business: "For business",
    socials: "Social media",
    allRights: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms of Service",
    cookiesSettings: "Cookies Settings",
  },
  ru: {
    courses: "Курсы",
    centers: "IT центры",
    programs: "Программы",
    aboutUs: "О нас",
    contactUs: "Связаться с нами",
    faq: "FAQ",
    students: "Для студентов",
    business: "Для бизнеса",
    socials: "Социальные сети",
    allRights: "Все права защищены",
    privacyPolicy: "Политика конфиденциальности",
    termsAndConditions: "Условия использования",
    cookiesSettings: "Настройки файлов cookie",
  },
  uz: {
    courses: "Kurslar",
    centers: "IT Markazlar",
    programs: "Dasturlar",
    aboutUs: "Biz haqimizda",
    contactUs: "Biz bilan bog'lanish",
    faq: "FAQ",
    students: "O'quvchilarga",
    business: "Tadbirkorlarga",
    socials: "Ijtimoiy tarmoqlar",
    allRights: "Barcha huquqlar himoyalangan",
    privacyPolicy: "Maxfiylik siyosati",
    termsAndConditions: "Foydalanish shartlari",
    cookiesSettings: "Cookie sozlamalari",
  },
};

const Index = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className='dark-blue white m-t-160 p-t-40 p-b-32 pr-3'>
      <Container>
        <Row className='p-b-40'>
          <Col md='3' xs='6'>
            <Image
              src='/icons/LogoWhite.svg'
              alt='white-logo'
              height={22}
              width={164}
            />
            <div className='m-t-12 m-b-35'>Powered by ITPARK</div>
            <div className='d-flex align-items-center gap-2'>
              <Image
                src='/icons/CallWhite.svg'
                alt='white-logo'
                height={16}
                width={16}
              />
              <div>+998 71 209 11 99</div>
            </div>
            <div className='m-t-16 m-b-16 d-flex align-items-center gap-2'>
              <Image
                src='/icons/MessageWhite.svg'
                alt='white-logo'
                height={16}
                width={16}
              />
              <div>info@edu.it-park.uz</div>
            </div>
            <div className='w-75 d-flex gap-2'>
              <Image
                src='/icons/LocationWhite.svg'
                alt='white-logo'
                height={16}
                width={16}
                className='m-t-5'
              />
              <div>4, Tepamasjid str., Tashkent, Uzbekistan, 100164</div>
            </div>
          </Col>
          <Col md='3' xs='6'>
            <div className='grey'>{lang[locale].students}</div>
            <div className='m-t-20 m-b-12'>
              <Link href='#' className="text-decoration-none white">{lang[locale].courses}</Link>
            </div>
            <div><Link href='#' className="text-decoration-none white">{lang[locale].centers}</Link></div>
            <div className='m-t-12 m-b-12'><Link href='#' className="text-decoration-none white">{lang[locale].programs}</Link></div>
            <div><Link href='#' className="text-decoration-none white">{lang[locale].aboutUs}</Link></div>
            <div className='m-t-12 m-b-12'><Link href='#' className="text-decoration-none white">{lang[locale].contactUs}</Link></div>
            <div><Link href='#' className="text-decoration-none white">{lang[locale].faq}</Link></div>
          </Col>
          <Col md='3' xs='6'>
            <div className='grey'>{lang[locale].business}</div>
            <div className='m-t-20 m-b-12'><Link href='#' className="text-decoration-none white">{lang[locale].login}</Link></div>
            <div><Link href='#' className="text-decoration-none white">{lang[locale].contactUs}</Link></div>
            <div className='m-t-12'><Link href='#' className="text-decoration-none white">{lang[locale].faq}</Link></div>
          </Col>
          <Col md='3' xs='6'>
            <div className='grey'>{lang[locale].socials}</div>
            <div className='d-flex gap-2 m-t-20 m-b-12'>
              <Image
                src='/icons/Facebook.svg'
                alt='white-logo'
                height={24}
                width={24}
              />
              <div>Facebook</div>
            </div>
            <div className='d-flex gap-2 m-t-12'>
              <Image
                src='/icons/Instagram.svg'
                alt='white-logo'
                height={24}
                width={24}
              />
              <div>Instagram</div>
            </div>
            <div className='d-flex gap-2 m-t-12'>
              <Image
                src='/icons/Twitter.svg'
                alt='white-logo'
                height={24}
                width={24}
              />
              <div>Twitter</div>
            </div>
            <div className='d-flex gap-2 m-t-12'>
              <Image
                src='/icons/LinkedIn.svg'
                alt='white-logo'
                height={24}
                width={24}
              />
              <div>LinkedIn</div>
            </div>
          </Col>
        </Row>
        <Row className='border-top p-t-35'>
          <Col md='12' className='d-flex gap-4 flex-wrap'>
            <div>© 2023 IT Park. {lang[locale].allRights}.</div>
            <div>{lang[locale].privacyPolicy}</div>
            <div>{lang[locale].termsAndConditions}</div>
            <div>{lang[locale].cookiesSettings}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
