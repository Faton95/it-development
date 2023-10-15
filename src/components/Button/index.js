import styles from './style.module.scss';

const Button = ({ children, classes }) => {
  return <button className={`${styles.button} ${classes}`}>{children}</button>;
};

export default Button;
