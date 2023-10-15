import { Form } from "react-bootstrap";
import styles from "./style.module.scss";

const filter = [
  {
    title: "Course type",
    options: [
      {
        id: 1,
        name: "Online",
        amount: "23",
      },
      {
        id: 2,
        name: "Offline",
        amount: "99",
      },
      {
        id: 3,
        name: "Hybrid",
        amount: "147",
      },
    ],
  },
  {
    title: "Course subjects",
    options: [
      {
        id: 1,
        name: "Back end",
        amount: "123",
      },
      {
        id: 2,
        name: "Front end",
        amount: "999",
      },
      {
        id: 3,
        name: "3D artist",
        amount: "747",
      },
    ],
  },
];

const Filter = () => {
  return (
    <div className={styles.root}>
      <div className='h-5 border-bottom p-b-16'>Filter</div>
      {filter.map((item, index) => (
        <div key={index}>
          <div className='h-6 m-t-16 m-b-8'>{item.title}</div>
          {item.options.map((item, index) => (
            <div key={index} className='d-flex justify-content-between m-b-5'>
              <Form.Check
                className='pr-3'
                type='checkbox'
                id={item.name}
                label={item.name}
              />
              <span className={`pr-6 ${styles.filterAmount}`}>
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      ))}
      <button className={`pr-3 ${styles.filterButton} m-t-32`}>
        Clear filter
      </button>
    </div>
  );
};

export default Filter;
