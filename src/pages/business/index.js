import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import AutoplayCarousel from "@/components/InfiniteCarusel";
import Card from "@/components/Card";
import Stories from "@/sections/main/Stories";
import EducationInfo from "@/sections/about-us/EducationInfo";
import Video from "@/sections/shared/Video";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const residents = {
  0: {
    imgUrl: "/images/resident1.png",
    title: "1",
  },
  1: {
    imgUrl: "/images/resident2.png",
    title: "2",
  },
  2: {
    imgUrl: "/images/resident3.png",
    title: "3",
  },
  3: {
    imgUrl: "/images/resident4.png",
    title: "4",
  },
};

export default function Business() {
  const { t: translate } = useTranslation("aboutUs", "common");

  const educationInfo = translate("educationInfo", { returnObjects: true });

  return (
    <Layout>
      <Container className='m-t-50 text-center m-b-66'>
        <div className='h-1'>
          <span className='blue'>Innovators</span> Igniting <br /> IT
          Excellence!
        </div>
        <div className='pr-3 black m-b-40'>Powered by ITPARK</div>
        <Button>Become a resident</Button>
      </Container>
      <AutoplayCarousel big list={residents} classes='carouselTrackLeft' />
      <Container className='m-t-160 m-b-160'>
        <Row>
          <Col md='6' sm='12'>
            <Card classes='background-blue white p-t-40 p-l-40 h-100'>
              <div className='h-2 w-75 m-b-20'>
                Benefits of being a resident
              </div>
              <div className='pr-1 w-75'>
                Residents of T Park are IT companies and IT training centers,
                which can have a number of important advantages.
              </div>
            </Card>
          </Col>
          <Col md='6' sm='12'>
            <Row className='gy-4'>
              <Col md='6' sm='12'>
                <div className='outline-card'>
                  <div className='h-2'>
                    7.5<span className='blue'>%</span>
                  </div>
                  <div className='pr-2'>Income tax</div>
                </div>
              </Col>
              <Col md='6' sm='12'>
                <div className='outline-card'>
                  <div className='h-2'>
                    0<span className='blue'>%</span>
                  </div>
                  <div className='pr-2'>Corporate taxes</div>
                </div>
              </Col>
              <Col md='6' sm='12'>
                <div className='outline-card'>
                  <div className='h-2'>
                    0<span className='blue'>%</span>
                  </div>
                  <div className='pr-2'>Single social payment</div>
                </div>
              </Col>
              <Col md='6' sm='12'>
                <div className='outline-card'>
                  <div className='h-2'>
                    0<span className='blue'>Uzs</span>
                  </div>
                  <div className='pr-2'>
                    Customs fees when importing goods for personal use
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Stories data={translate("successfulStories")} />
      <EducationInfo educationInfo={educationInfo} />
      <Video />
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["aboutUs", "common"])),
  },
});
