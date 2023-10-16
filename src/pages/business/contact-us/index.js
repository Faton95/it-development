import { useState } from "react";
import Layout from "@/components/Layout";
import { Container, Button, Form } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Senters() {
  const { t: translate } = useTranslation("contact-us");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Layout>
      <Container className='m-t-50 text-center d-flex flex-column justify-content-center w-50'>
        <div className='h-1'>{translate("title")}</div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group
            controlId='validationCustom01'
            className='text-start m-t-80 m-b-40'
          >
            <Form.Label>{translate("name")}</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder={translate("namePlaceholder")}
            />
          </Form.Group>
          <Form.Group controlId='validationCustom02' className='text-start'>
            <Form.Label>{translate("email")}</Form.Label>
            <Form.Control
              required
              type='email'
              placeholder={translate("emailPlaceholder")}
            />
          </Form.Group>
          <Form.Group
            controlId='validationCustom02'
            className='text-start m-t-40 m-b-40'
          >
            <Form.Label>{translate("message")}</Form.Label>
            <Form.Control
              required
              as='textarea'
              rows={5}
              placeholder={translate("messagePlaceholder")}
            />
          </Form.Group>
          <Button type='submit'>{translate("button")}</Button>
        </Form>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact-us"])),
  },
});
