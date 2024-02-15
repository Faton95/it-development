import { Form } from "react-bootstrap";
import styles from "./style.module.scss";
import MultiRangeSlider from "../../MultiRangeSlider";
import { useState } from 'react';

const Filter = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className={styles.root}>
      <div className='h-5 border-bottom p-b-16'>Фильтр</div>
      <div className='h-6 m-t-16 blue'>Шахсга доир малумотлар</div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">СТИР</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">ЖШШИР</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="d-flex gap-2 m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Фамилия</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-0">Исм</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Отасининг исми</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Туғилган жойи (Худуд)</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Тошкент</option>
            <option>Самарканд</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Яшаш жойи (Худуд)</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Тошкент</option>
            <option>Самарканд</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Яшаш жойи (Туман/Шахар)</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Тошкент</option>
            <option>Самарканд</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Жинси: &nbsp;&nbsp;</Form.Label>
          <Form.Check
            inline
            name='sex'
            type='radio'
            label='Эркак'
            id='radio'
          />
          <Form.Check
            inline
            name='sex'
            type='radio'
            label='Айол'
            id='radio'
          />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
        <Form.Label className="mb-0">Ëши(дан-гача)</Form.Label>
        <MultiRangeSlider
          ruler={false}
          min={0}
          max={100}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Миллати</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Кайси чет тилларини билади</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className='h-6 m-t-16 blue'>Маълумоти</div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">ОТМ</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="d-flex gap-2 m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Ўкув йили (дан)</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-0">Ўкув йили (гача)</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Мутахассислик</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Таълим даражаси</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Илмий даража</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Магистр</option>
            <option>Бакалавр</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Илмий унвон</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Доктор наук</option>
            <option>Доцент</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className='h-6 m-t-16 blue'>Иш жойи</div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Иш берувчи СТИРи</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Иш берувчининг номи</Form.Label>
          <Form.Control size='sm' className='pr-3' type="text" />
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Комплекс</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Категория</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Худуд даража</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">ДХ коди</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="d-flex gap-4 m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">ДХ коди</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-0">ДХ коди</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-0">ДХ коди</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className='h-6 m-t-16 blue'>Қўшимча маълумотлар</div>
      <div className="m-b-10">
        <Form.Group>
          <Form.Label className="mb-0">Давлат мукофотлари</Form.Label>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Ўзбек</option>
            <option>Русский</option>
          </Form.Select>
        </Form.Group>
      </div>
      <button className={`pr-3 ${styles.filterButton} m-t-32`}>
        Clear filter
      </button>
    </div>
  );
};

export default Filter;
