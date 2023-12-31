import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import "./style.scss";

const data = [
  {
    id: 0,
    title: "Is it safe to pay from my visa card?",
    description:
      "If you are interested in purchasing courses, you should look for reputable online platforms that offer educational content, such as Udemy, Coursera, edX, or other similar platforms. Always ensure that you review the course content, ratings, and reviews to make an informed decision before making any purchase.",
  },
  {
    id: 1,
    title: "Is it safe to pay from my visa card?",
    description:
      "If you are interested in purchasing courses, you should look for reputable online platforms that offer educational content, such as Udemy, Coursera, edX, or other similar platforms. Always ensure that you review the course content, ratings, and reviews to make an informed decision before making any purchase.",
  },
  {
    id: 2,
    title: "Is it safe to pay from my visa card?",
    description:
      "If you are interested in purchasing courses, you should look for reputable online platforms that offer educational content, such as Udemy, Coursera, edX, or other similar platforms. Always ensure that you review the course content, ratings, and reviews to make an informed decision before making any purchase.",
  },
  {
    id: 3,
    title: "Is it safe to pay from my visa card?",
    description:
      "If you are interested in purchasing courses, you should look for reputable online platforms that offer educational content, such as Udemy, Coursera, edX, or other similar platforms. Always ensure that you review the course content, ratings, and reviews to make an informed decision before making any purchase.",
  },
  {
    id: 4,
    title: "Is it safe to pay from my visa card?",
    description:
      "If you are interested in purchasing courses, you should look for reputable online platforms that offer educational content, such as Udemy, Coursera, edX, or other similar platforms. Always ensure that you review the course content, ratings, and reviews to make an informed decision before making any purchase.",
  },
  {
    id: 5,
    title: "Is it safe to pay from my visa card?",
    description:
      "If you are interested in purchasing courses, you should look for reputable online platforms that offer educational content, such as Udemy, Coursera, edX, or other similar platforms. Always ensure that you review the course content, ratings, and reviews to make an informed decision before making any purchase.",
  },
];
const AccordionList = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <div
        className='d-flex justify-content-between'
        onClick={decoratedOnClick}
      >
        <div>{children}</div>
        <Image
          src={`/icons/${!isCurrentEventKey ? "Plus" : "Minus"}.svg`}
          height={24}
          width={24}
          alt='Plus Minus'
        />
      </div>
    );
  }

  return (
    <Accordion defaultActiveKey='0' className='d-flex flex-column gap-2'>
      {data.map(({ id, title, description }) => (
        <div key={id} className='custom-accordion'>
          <ContextAwareToggle eventKey={id} className='h-7'>
            {title}
          </ContextAwareToggle>
          <Accordion.Collapse eventKey={id} className='pr-4 text-start'>
            <>
              <br />
              <Card.Body>{description}</Card.Body>
            </>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

export default AccordionList;
