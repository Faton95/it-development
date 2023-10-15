import Header from "@/sections/main/Header";
import Stories from "@/sections/main/Stories";
import Layout from "@/components/Layout";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import Partners from "@/sections/main/Partners";
import Universities from "@/sections/main/Universities";
import Courses from "@/sections/main/Courses";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t: translate } = useTranslation("common");

  const infoCard = translate("infoCard", { returnObjects: true });
  const itCourses = translate("itCourses", { returnObjects: true });
  const usefulLinks = translate("usefulLinks", { returnObjects: true });
  const itUniversities = translate("itUniversities", { returnObjects: true });
  return (
    <Layout>
      <Header infoCard={infoCard} />
      <Stories data={translate("successfulStories")} />
      <Courses itCourses={itCourses} />
      <UsefulLinks data={usefulLinks} />
      <Universities data={itUniversities} />
      <Partners data={translate("ourPartners")} />
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
