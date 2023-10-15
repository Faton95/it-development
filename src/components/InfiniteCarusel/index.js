import CarouselItem from "./CaruselItem";
import styles from "./style.module.scss";

const AutoplayCarousel = ({ list, classes }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles[classes]}`}>
        {Object.keys(list).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={list[detailKey].imgUrl}
              imgTitle={list[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(list).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={list[detailKey].imgUrl}
              imgTitle={list[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(list).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={list[detailKey].imgUrl}
              imgTitle={list[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
};

export default AutoplayCarousel;
