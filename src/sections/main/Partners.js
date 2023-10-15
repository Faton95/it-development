import Image from "next/image";
import { Container } from "react-bootstrap";

const Partners = ({ data }) => {
  return (
    <Container>
      <div className='h-2 text-center m-t-160 m-b-40'>{data}</div>
      <div className='d-flex gap-5 overflow-auto'>
        <Image
          src='/images/partner-black.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-blue.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-black.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-blue.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-black.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-blue.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-black.png'
          alt='partner'
          height={56}
          width={202}
        />
        <Image
          src='/images/partner-blue.png'
          alt='partner'
          height={56}
          width={202}
        />
      </div>
    </Container>
  );
};

export default Partners;
