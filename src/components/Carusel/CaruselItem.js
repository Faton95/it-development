import React from "react";
import Image from "next/image";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";

export const Slide = React.memo(function MyComponent(
  StackedCarouselSlideProps
) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;

  return (
    <div className='card-card' draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className='card-overlay fill'
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className='detail fill'>
        <div className='discription'>
          <Image
            alt='image'
            src={`/images/${coverImage}`}
            width={350}
            height={350}
            style={{ borderRadius: 20 }}
          />
        </div>
      </div>
    </div>
  );
});
