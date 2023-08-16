import Hashtags from "@/components/Hashtags";
import Image from "next/image";
import "./style.scss";

const CourseCardItem = ({ data }) => {
  const {
    image,
    schoolName,
    courseName,
    price,
    studyType,
    level,
    duration,
    skill,
    website,
    phoneNumber,
    telegramLink,
  } = data;
  return (
    <div className='rootCard'>
      <div className='image-container'>
        <Image src={image} fill className='image' alt='card item' />
      </div>
      <div className='info'>
        <div className='pr-4'>| {schoolName}</div>
        <div className='h-7 m-b-12 m-t-12'>{courseName}</div>
        <div className='d-flex align-items-center gap-2 m-b-12'>
          <Image src='/icons/wallet.svg' alt='wallet' height={20} width={20} />
          <div className='pr-2 blue'>{price}</div>
        </div>
        <div className='d-flex gap-3 m-b-12'>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Book.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{studyType}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Level.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{level}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Level.svg' alt='book' height={16} width={16} />
            <div className='pr-4'>{duration}</div>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between m-b-16'>
          <Hashtags classes='pr-5'>{skill}</Hashtags>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Call.svg' alt='book' height={16} width={16} />
            <div className='pr-5'>{phoneNumber}</div>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center gap-1'>
            <Image src='/icons/Website.svg' alt='book' height={16} width={16} />
            <div className='pr-5'>{website}</div>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <Image
              src='/icons/Telegram.svg'
              alt='book'
              height={16}
              width={16}
            />
            <div className='pr-5'>{telegramLink}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardItem;
