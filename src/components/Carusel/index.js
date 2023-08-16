import { useState } from "react";
import Carousel from "react-simply-carousel";

const list = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img3.jpg",
];
function Carusel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        updateOnItemClick
        autoplay={true}
        activeSlideProps={{
          style: {
            background: "blue",
            height: 300,
            width: 300,
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          show: false,
        }}
        backwardBtnProps={{
          show: false,
        }}
        itemsToShow={5}
        speed={4000}
        centerMode
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <div
            style={{
              background: "yellow",
              width: 200,
              height: 200,
              border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box",
            }}
            key={index}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carusel;
