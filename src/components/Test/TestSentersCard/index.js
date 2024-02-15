import SentersCardItem from "./SentersCardItem";
import { Modal, Row, Col, Form } from "react-bootstrap";
import { useState } from 'react';

const data = [
  {
    id: 1,
    image: "/images/profileIMG1.jpeg",
    fullName: "Akmal Maxkamov Davronbek o'g'li",
    position: 'Qishloq xo`jaligiga mo`ljallangan yerlardan foydalanishni nazorat qilish bo`limi bosh mutaxassisi',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Toshkent viloyati Qishloq xo‘jaligi boshqarmasi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 2,
    image: "/images/profileIMG2.jpeg",
    fullName: "Yulduz Erkinova Shovkat qizi",
    position: 'Binokor MFY hokim yordamchisi',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "O‘zbekiston Respublikasi Qishloq xo`jaligi vazirligi huzuri",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 3,
    image: "/images/profileIMG3.jpeg",
    fullName: "Otabek Rahimov Temur o'g'li",
    position: 'Yoshlar siyosati, ijtimoiy rivojlantirish va ma`naviy-ma`rifiy ishlar bo`yicha yetakchi mutaхassis',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Bo‘zatov tumani Qishloq xo‘jaligi bo‘limi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 4,
    image: "/images/profileIMG4.png",
    fullName: "Munisa Yo'ldosheva Jamshid qizi",
    position: 'Matbuotchi kotib',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Qoraqalpog‘iston Respublikasi Madaniyat vazirligi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: 1,
    image: "/images/profileIMG1.jpeg",
    fullName: "Akmal Maxkamov Davronbek o'g'li",
    position: 'Qishloq xo`jaligiga mo`ljallangan yerlardan foydalanishni nazorat qilish bo`limi bosh mutaxassisi',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Toshkent viloyati Qishloq xo‘jaligi boshqarmasi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 2,
    image: "/images/profileIMG2.jpeg",
    fullName: "Yulduz Erkinova Shovkat qizi",
    position: 'Binokor MFY hokim yordamchisi',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "O‘zbekiston Respublikasi Qishloq xo`jaligi vazirligi huzuri",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 3,
    image: "/images/profileIMG3.jpeg",
    fullName: "Otabek Rahimov Temur o'g'li",
    position: 'Yoshlar siyosati, ijtimoiy rivojlantirish va ma`naviy-ma`rifiy ishlar bo`yicha yetakchi mutaхassis',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Bo‘zatov tumani Qishloq xo‘jaligi bo‘limi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 4,
    image: "/images/profileIMG4.png",
    fullName: "Munisa Yo'ldosheva Jamshid qizi",
    position: 'Matbuotchi kotib',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Qoraqalpog‘iston Respublikasi Madaniyat vazirligi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: 1,
    image: "/images/profileIMG1.jpeg",
    fullName: "Akmal Maxkamov Davronbek o'g'li",
    position: 'Qishloq xo`jaligiga mo`ljallangan yerlardan foydalanishni nazorat qilish bo`limi bosh mutaxassisi',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Toshkent viloyati Qishloq xo‘jaligi boshqarmasi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 2,
    image: "/images/profileIMG2.jpeg",
    fullName: "Yulduz Erkinova Shovkat qizi",
    position: 'Binokor MFY hokim yordamchisi',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "O‘zbekiston Respublikasi Qishloq xo`jaligi vazirligi huzuri",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 3,
    image: "/images/profileIMG3.jpeg",
    fullName: "Otabek Rahimov Temur o'g'li",
    position: 'Yoshlar siyosati, ijtimoiy rivojlantirish va ma`naviy-ma`rifiy ishlar bo`yicha yetakchi mutaхassis',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Bo‘zatov tumani Qishloq xo‘jaligi bo‘limi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99"
  },
  {
    id: 4,
    image: "/images/profileIMG4.png",
    fullName: "Munisa Yo'ldosheva Jamshid qizi",
    position: 'Matbuotchi kotib',
    stir: '9263548295',
    jshir: '33472885647285',
    workStir: "928374651",
    workName: "Qoraqalpog‘iston Respublikasi Madaniyat vazirligi",
    dxCode: 'SC01',
    phoneNumber: "+998 99 999 99 99",
  }
];
const SentersCardList = () => {
  const [show, setShow] = useState(false);

  const onHandleEvent = (e) => {
    console.log("12341234", e.type)
  }
  return (
    <>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        size='xl'
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="h-50">
          <h1>User info</h1>
        </Modal.Body>
      </Modal>
      <Row className='m-b-20'>
        <Col md='9'>
          <Form.Control type='text' placeholder='Излаш...' />
        </Col>
        <Col md='3'>
          <Form.Select aria-label='Default select example'>
            <option>Регион бойича</option>
            <option value='1'>Tashkent</option>
            <option value='2'>Samarkand</option>
            <option value='3'>Bukhara</option>
          </Form.Select>
        </Col>
      </Row>
      <div onMouseEnter={onHandleEvent} onMouseLeave={onHandleEvent}>
        <div className="h-5 m-b-10">
          Қидирув натижаси: 13
        </div>
      </div>
      <div className='d-flex flex-column gap-2 m-l-12'>
        {data?.map((item) => (
          <div key={item.id} onClick={() => setShow(true)}>
            <SentersCardItem data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SentersCardList;
