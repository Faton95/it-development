import React from "react";
import "./style.scss";
import CarouselItem from "./CaruselItem";

const cardDetails = {
  0: {
    imgUrl: "/icons/logos/AWS.svg",
    title: "1",
  },
  1: {
    imgUrl: "/icons/logos/Behance.svg",
    title: "1",
  },
  2: {
    imgUrl: "/icons/logos/ClickUp.svg",
    title: "1",
  },
  3: {
    imgUrl: "/icons/logos/CodePen.svg",
    title: "1",
  },
  4: {
    imgUrl: "/icons/logos/Dribbble.svg",
    title: "1",
  },
  5: {
    imgUrl: "/icons/logos/Webflow.svg",
    title: "1",
  },
};

const AutoplayCarousel = ({ classes }) => {
  return (
    <div className='carousel-container'>
      <div className={classes}>
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
};

export default AutoplayCarousel;
