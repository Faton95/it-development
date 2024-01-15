import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SentersCardList from "@/components/SentersCard";
import Filter from "@/components/Filter";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";
import { useRouter } from "next/router";

export default function Senters() {
  const router = useRouter();
  const { locale } = router;

  const { t: translate } = useTranslation("common");

  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/centers?populate=*&locale=${locale}`,
    fetcher
  );

  
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
