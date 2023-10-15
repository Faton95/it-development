import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

const Video = () => {
  return (
    <Container className='m-t-160'>
      <div className={styles.videoBackground}>
        <iframe
          className={styles.innerVideo}
          src='https://www.youtube.com/embed/w9O3aRY_41c?si=sD9WvHcmlPPWJ1Gt'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Video;
