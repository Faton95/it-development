import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";
import { useRouter } from "next/router";

const UsefulLinks = ({ withTitle = true }) => {
  const router = useRouter();
  const { locale } = router;
  const { data, error, isLoading } = useSWR(
    `https://e5e1-213-230-80-10.ngrok-free.app/api/useful-links?populate=*&locale=${locale}`,
    fetcher
  );


  return (
    <Container>
      {withTitle && (
        <div className='h-2 text-center m-t-160 m-b-40'>
          {/* {data.usefulLinksTitle} */}
        </div>
      )}
      <Row className='g-4 m-t-50'>
        {data?.data?.map((item, index) => (
          <Col key={index} md='6' sm='12'>
            <Row className={styles.usefulCard}>
              <Col md='9' sm='12'>
                <div className='h-4 m-b-10'>{item.attributes.title}</div>
                <div className='pr-2'>{item.attributes.body}</div>
              </Col>
              <Col md='3' sm='12'>
                <picture>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                    alt={item.icon}
                    height='auto'
                    width={120}
                  />
                </picture>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsefulLinks;
