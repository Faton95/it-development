import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import { Slide } from "./CaruselItem";

const data = [
  {
    image: "carIMG1.png",
  },
  {
    image: "carIMG2.png",
  },
  {
    image: "carIMG3.png",
  },
  {
    image: "carIMG4.png",
  },
  {
    image: "carIMG5.png",
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
            slideWidth={350}
            carouselWidth={width}
            data={data}
            maxVisibleSlide={5}
            disableSwipe
            customScales={[25, 0.55, 0.55, 0.55]}
            transitionTime={450}
          />
        );
      }}
    />
  );
};

export default Carusel;
