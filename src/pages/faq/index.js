import Layout from "@/components/Layout";
import { Container, Form } from "react-bootstrap";
import AccordionList from "@/components/Accordion";
import { useState } from "react";
import InfoCard from "@/sections/shared/InfoCard";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function FAQ() {
  const [filter, setFilter] = useState(0);
  const { t: translate } = useTranslation("faq");

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
                filter == index ? "primary" : "secondary"
              } w-25`}
              value={index}
            >
              {item}
            </button>
          ))}
        </div>
        <AccordionList category={filter} />
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
