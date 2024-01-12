import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import Image from "next/image";
import styles from "./styles.module.scss";

const AccordionList = ({ list, category }) => {
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
      {list
        ?.filter(({ attributes }) => attributes.type === category)
        .map(({ attributes }) => (
          <div key={attributes.id} className={styles.customAccordion}>
            <ContextAwareToggle eventKey={attributes.type} className='h-7'>
              {attributes.title}
            </ContextAwareToggle>
            <Accordion.Collapse
              eventKey={attributes.type}
              className='pr-4 text-start'
            >
              <>
                <br />
                <Card.Body>{attributes.body}</Card.Body>
              </>
            </Accordion.Collapse>
          </div>
        ))}
    </Accordion>
  );
};

export default AccordionList;
