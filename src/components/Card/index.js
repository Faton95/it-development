import style from "./style.module.scss";

const Card = ({ children, classes }) => {
  return <div className={` ${style.layout} ${classes}`}>{children}</div>;
};

export default Card;
