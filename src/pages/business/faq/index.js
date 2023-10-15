import Layout from "@/components/Layout";
import { Container, Form } from "react-bootstrap";
import AccordionList from "@/components/Accordion";
import { useState } from "react";
import InfoCard from "@/sections/shared/InfoCard";

const filters = ["General", "Students", "Residents", "Partners"];

const infoData = {
  title: "Still have questions?",
  description:
    "Feel free to ask any questions, and we'll provide accurate \n and helpful answers!",
  buttonText: "Contact us",
};

export default function FAQ() {
  const [filter, setFilter] = useState(0);

  const handleChoose = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Layout>
      <Container className='text-center m-t-50 w-50'>
        <div className='h-1 m-b-80'>Frequently asked questions</div>
        <Form.Control type='text' placeholder='Enter your question...' />
        <div className='d-flex justify-content-between gap-3 m-t-40 m-b-40'>
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
        <AccordionList />
        <InfoCard />
      </Container>
    </Layout>
  );
}
