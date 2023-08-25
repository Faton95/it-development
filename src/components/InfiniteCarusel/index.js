import React from "react";
import "./style.scss";
import CarouselItem from "./CaruselItem";

const AutoplayCarousel = ({ list, classes }) => {
  return (
    <div className='carousel-container'>
      <div className={classes}>
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
