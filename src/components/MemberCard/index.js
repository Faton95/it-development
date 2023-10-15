import Image from "next/image";

const MemberCard = ({ data }) => {
  const { image, name, position } = data;

  return (
    <div
      style={{
        backgroundImage: `url(/images/${image}.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        borderRadius: 10,
        paddingTop: "50%",
      }}
    >
      <div className='white m-l-16 m-b-4'>{name}</div>
      <div className='white m-b-12 m-l-16'>{position}</div>
      <div className='d-flex gap-3 p-b-16 m-l-16'>
        <Image
          src='/icons/Facebook.svg'
          alt='white-logo'
          height={24}
          width={24}
        />
        <Image
          src='/icons/Instagram.svg'
          alt='white-logo'
          height={24}
          width={24}
        />
        <Image
          src='/icons/Twitter.svg'
          alt='white-logo'
          height={24}
          width={24}
        />
        <Image
          src='/icons/LinkedIn.svg'
          alt='white-logo'
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};

export default MemberCard;
