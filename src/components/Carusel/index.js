import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Container } from "react-bootstrap";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/api/getAPI";
import { Slide } from "./CaruselItem";

const data1 = [
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
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(false);
  const searchParams = useSearchParams();
  let obj = {};
  const search = searchParams.get("id") || 0;

  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/carusels?populate=*`,
    fetcher
  );

  data?.data?.map(({ attributes }, index) => (obj[index] = attributes.title));

  const caruselImages = data?.data?.map(({ attributes }) => {
    return { image: attributes?.images?.data[0]?.attributes?.url };
  });

  useEffect(() => {
    setState(search);
  }, [state, search]);

  const ref = React.useRef(StackedCarousel);

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current?.goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Container className='text-center'>
        <div className='h-1 black m-t-72 m-b-12'>
          Start your bright
          <br />
          <div className='d-inline-block'>
            <div>IT career as</div>
            <div key={obj[index]} className={`blue typewriter`}>
              {obj[index]}
            </div>
          </div>
        </div>
        <div className='pr-3 black m-b-40'>Powered by ITPARK</div>
      </Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                onActiveSlideChange={(newCenterDataIndex) =>
                  setIndex(newCenterDataIndex)
                }
                slideComponent={Slide}
                slideWidth={350}
                carouselWidth={width}
                data={caruselImages}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[25, 0.55, 0.55, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
      )}
    </>
  );
};

export default Carusel;
