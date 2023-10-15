import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

export default function CarouselItem({ imgUrl, imgTitle }) {
  const router = usePathname();

  const isStudent = !router.includes("/business");

  const height = isStudent ? 120 : 120;
  const width = isStudent ? 120 : 138;

  return (
    <div
      className={`${isStudent ? styles.carouselCard : styles.carouselCardBig}`}
    >
      <Image src={imgUrl} alt={imgTitle} height={height} width={width} />
    </div>
  );
}
