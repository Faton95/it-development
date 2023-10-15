import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SentersCardList from "@/components/SentersCard";
import Filter from "@/components/Filter";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Senters() {
  const { t: translate } = useTranslation("common");

  const usefulLinks = translate("usefulLinks", { returnObjects: true });

  return (
    <Layout>
      <Container className='m-t-50'>
        <Row>
          <Col md='3'>
            <Filter />
          </Col>
          <Col md='9'>
            <SentersCardList />
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
