import "./style.scss";

const Button = ({ children, classes }) => {
  return <button className={`button ${classes}`}>{children}</button>;
};

export default Button;
