import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import "./style.css";
import { Slide } from "./CaruselItem";

const data = [
  {
    image: "img1.jpg",
  },
  {
    image: "img2.jpg",
  },
  {
    image: "img3.jpg",
  },
  {
    image: "img4.jpg",
  },
  {
    image: "img1.jpg",
  },
];

const Carusel = () => {
  const ref = React.useRef(StackedCarousel);
  return (
    <ResponsiveContainer
      carouselRef={ref}
      render={(width, carouselRef) => {
        return (
          <StackedCarousel
            ref={carouselRef}
            slideComponent={Slide}
            slideWidth={240}
            carouselWidth={width}
            data={data}
            maxVisibleSlide={5}
            disableSwipe
            customScales={[1, 0.85, 0.7, 0.55]}
            transitionTime={450}
          />
        );
      }}
    />
  );
};

export default Carusel;
