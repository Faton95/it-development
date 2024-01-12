import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";
import { useRouter } from "next/router";
import NewsCard from '../../components/Card/newsCard';
import Link from "next/link";

export default function News() {
  const router = useRouter();
  const { locale } = router;

  const { t: translate } = useTranslation("news");

  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/news?populate=*&locale=${locale}`,
    fetcher
  );

  return (
    <Layout>
      <Container className='text-center m-t-50'>
        <div className='h-1 m-b-80'>{translate("title")}</div>
        <Row className="d-flex align-items-stretch">
        {data?.data?.map((item) => {
          const dd = new Date(item?.attributes?.createdAt)

          const image = item?.attributes?.image?.data?.attributes?.url;
          const title = item?.attributes?.title;
          const created_at = `${dd.getDay()}.${dd.getMonth()}.${dd.getFullYear()}`
          return (
            <Col md="4" sm='6' xs='12' key={item.id}>
              <Link className="text-decoration-none black" href={`/${locale}/news/${item?.id}`}>
                <NewsCard image={image} title={title} created_at={created_at} />
              </Link>
            </Col>
          )
        })}
        </Row>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["news"])),
  },
});
