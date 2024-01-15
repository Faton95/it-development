import Layout from "@/components/Layout";
import { Container, Row, Col, Form } from "react-bootstrap";
import CourseCardList from "@/components/CourseCard";
// import Filter from "@/components/Filter";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";
import { useRouter } from "next/router";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  const router = useRouter();
  const { locale } = router;

  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/courses?populate=*&locale=${locale}`,
    fetcher
  );

  console.log("data", data?.data);
  const { t: translate } = useTranslation("common");

  const usefulLinks = translate("usefulLinks", { returnObjects: true });

  return (
    <Layout>
      <Container className='m-t-50'>
        <Row className='m-b-40'>
          <Col md='9' sm='8' xs='8'>
            <Form.Control type='text' placeholder='Search for courses...' />
          </Col>
          <Col md='3' sm='4' xs='4'>
            <Form.Select aria-label='Default select example'>
              <option>By region</option>
              <option value='1'>Tashkent</option>
              <option value='2'>Samarkand</option>
              <option value='3'>Bukhara</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          {/* <Col md='3'>
            <Filter />
          </Col> */}
          <Col md='12'>
            <CourseCardList courses={data} />
          </Col>
        </Row>
        <UsefulLinks data={usefulLinks} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
