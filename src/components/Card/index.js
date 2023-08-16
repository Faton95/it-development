import "./style.scss";

const Card = ({ children, classes }) => {
  return <div className={`layout ${classes}`}>{children}</div>;
};

export default Card;
