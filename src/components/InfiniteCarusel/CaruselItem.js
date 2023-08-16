import "./style.scss";
import Image from "next/image";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className='carousel-card'>
      <Image src={imgUrl} alt={imgTitle} height={94} width={94} />
    </div>
  );
}
