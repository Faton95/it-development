import { useState } from "react";
import Layout from "@/components/Layout";
import { Container, Button, Form } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactUS() {
  const { t: translate } = useTranslation("contact-us");
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [validated, setValidated] = useState(false);

  async function handleSubmit(event) {
    const form = event.currentTarget;
    const body = {
      full_name: fullname,
      body: description,
      email,
    }

    if (form.checkValidity() !== false) {
      event.preventDefault();
      event.stopPropagation();
      const response = await fetch("http://localhost:1337/api/contact-uses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data: body}),
      });
      const data = await response.json();
      setValidated(true);
    }

    event.preventDefault();
    setValidated(true);
  }

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
              name='full_name'
              required
              type='text'
              placeholder={translate("namePlaceholder")}
              onChange={(event) => setFullname(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='validationCustom02' className='text-start'>
            <Form.Label>{translate("email")}</Form.Label>
            <Form.Control
              name='email'
              required
              type='email'
              placeholder={translate("emailPlaceholder")}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId='validationCustom02'
            className='text-start m-t-40 m-b-40'
          >
            <Form.Label>{translate("message")}</Form.Label>
            <Form.Control
              name='body'
              required
              as='textarea'
              rows={5}
              placeholder={translate("messagePlaceholder")}
              onChange={(event) => setDescription(event.target.value)}
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
