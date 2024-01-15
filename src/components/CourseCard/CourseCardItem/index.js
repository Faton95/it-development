import Hashtags from "@/components/Hashtags";
import Image from "next/image";
import styles from "./style.module.scss";

const CourseCardItem = ({ data }) => {
  console.log("sss", data)
  const image = data?.course_image?.data?.attributes?.url


  return (
    <div className={styles.rootCard}>
      <div className={styles.imageContainer}>
        <picture>
                  <img
                      alt='image'
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
                      height='200'
                      width='305'
                  />
          </picture>
      </div>
      <div className={styles.info}>
        <div className='pr-4'>| {data?.it_center}</div>
        <div className='h-7 m-b-12 m-t-12'>{data?.course_title}</div>
        <div className='d-flex align-items-center gap-2 m-b-12'>
          <Image src='/icons/Wallet.svg' alt='wallet' height={20} width={20} />
          <div className='pr-2 blue'>{data?.course_price}</div>
        </div>
        <div className='d-flex gap-3 m-b-12'>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Book.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{data?.course_type}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Level.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{data?.course_level}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Level.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{data?.course_deration} month</div>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between m-b-16'>
          <Hashtags classes='pr-5'>{data?.course_program}</Hashtags>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Call.svg' alt='book' height={16} width={16} />
            <div className='pr-5'>{data?.phone_number}</div>
          </div>
        </div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Website.svg' alt='book' height={16} width={16} />
            <div className='pr-5'>{data?.website}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image
              src='/icons/Telegram.svg'
              alt='book'
              height={16}
              width={16}
            />
            <div className='pr-5'>{data?.telegram_url}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardItem;
