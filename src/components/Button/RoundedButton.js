import "./style.scss";

const RoundedButton = ({ children, classes }) => {
  return <button className={`rounded-button ${classes}`}>{children}</button>;
};

export default RoundedButton;
