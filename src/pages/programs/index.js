import Layout from "@/components/Layout";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Programs() {
  const { t: translate } = useTranslation("common");

  const usefulLinks = translate("usefulLinks", { returnObjects: true });

  console.log("usefulLinks", usefulLinks);
  return (
    <Layout>
      <UsefulLinks data={usefulLinks} withTitle={false} />
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
