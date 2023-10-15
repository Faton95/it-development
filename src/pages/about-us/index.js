import Layout from "@/components/Layout";
import { Container } from "react-bootstrap";
import Image from "next/image";
import EducationInfo from "@/sections/about-us/EducationInfo";
import Video from "@/sections/shared/Video";
import TeamMembers from "@/sections/about-us/TeamMembers";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const images = [
  {
    id: 1,
    image: "avatar",
    position: "pos-1",
  },
  {
    id: 2,
    image: "avatar",
    position: "pos-2",
  },
  {
    id: 3,
    image: "avatar",
    position: "pos-3",
  },
  {
    id: 4,
    image: "avatar",
    position: "pos-4",
  },
  {
    id: 5,
    image: "avatar",
    position: "pos-5",
  },
  {
    id: 6,
    image: "avatar",
    position: "pos-6",
  },
  {
    id: 7,
    image: "avatar",
    position: "pos-7",
  },
];

export default function AboutUS() {
  const { t: translate } = useTranslation("aboutUs");

  const educationInfo = translate("educationInfo", { returnObjects: true });

  return (
    <Layout>
      <Container className='text-center vh-100 d-flex flex-column align-items-center justify-content-center position-relative'>
        <div className='h-1'>{translate("title")}</div>
        <div className='pr-3 black m-t-12'>Powered by ITPARK</div>
        {images.map((item) => (
          <Image
            key={item.id}
            src={`/images/${item.image}.png`}
            alt='avatar'
            height={96}
            width={96}
            className={`${item.position}`}
          />
        ))}
      </Container>
      <EducationInfo educationInfo={educationInfo} />
      <Video />
      <TeamMembers />
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["aboutUs"])),
  },
});
