import React, { useCallback } from "react";
import Image from "next/image";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const Slide = React.memo(function MyComponent(
  StackedCarouselSlideProps
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     swipeTo(dataIndex);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [swipeTo, dataIndex]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className='card-card' draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className='card-overlay fill'
          onClick={() => {
            router.push(pathname + "?" + createQueryString("id", dataIndex));
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
