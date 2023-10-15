import style from "./style.module.scss";

const RoundedButton = ({ children, classes }) => {
  return (
    <button className={`${style.roundedButton} ${classes}`}>
      {children}
    </button>
  );
};

export default RoundedButton;
