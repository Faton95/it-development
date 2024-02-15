import React from "react";
import Image from "next/image";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";

export const Slide = React.memo(function MyComponent(
  StackedCarouselSlideProps
) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;

  const coverImage = data[dataIndex]?.image;
  
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
      <a href={isCenterSlide ? `http://localhost:3000/en/courses?course=react` : ''}>
      <div className='detail fill'>
        <div className='discription'>
          <picture>
            <img
              alt='image'
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage}`}
              width={350}
              height={350}
              style={{ borderRadius: 20 }}
            />
          </picture>
        </div>
      </div>
      </a>
    </div>
  );
});
