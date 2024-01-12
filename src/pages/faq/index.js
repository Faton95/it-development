import Layout from "@/components/Layout";
import { Container, Form } from "react-bootstrap";
import AccordionList from "@/components/Accordion";
import { useState } from "react";
import InfoCard from "@/sections/shared/InfoCard";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";
import { useRouter } from "next/router";

const types = ["General", "Students", "Partners", "Residents"];

export default function FAQ() {
  const router = useRouter();
  const { locale } = router;

  const [filter, setFilter] = useState("General");
  const { t: translate } = useTranslation("faq");

  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/faqs?populate=*&locale=${locale}`,
    fetcher
  );

  const accordionList = data?.data;

  const filters = translate("filters", { returnObjects: true });
  const infoCard = translate("infoCard", { returnObjects: true });

  const handleChoose = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Layout>
      <Container className='text-center m-t-50'>
        <div className='h-1 m-b-80'>{translate("title")}</div>
        <Form.Control
          type='text'
          placeholder={translate("searchPlaceholder")}
        />
        <div className='d-flex justify-content-between gap-3 m-t-40 m-b-40 overflow-auto'>
          {filters.map((item, index) => (
            <button
              onClick={handleChoose}
              key={item}
              type='button'
              className={`btn btn-outline-${
                filter == types[index] ? "primary" : "secondary"
              } w-25`}
              value={types[index]}
            >
              {item}
            </button>
          ))}
        </div>
        <AccordionList category={filter} list={accordionList} />
        <InfoCard infoCard={infoCard} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["faq"])),
  },
});
