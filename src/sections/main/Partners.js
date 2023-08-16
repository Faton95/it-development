import { Container } from "react-bootstrap";
import Image from "next/image";

const Partners = () => {
  return (
    <Container>
      <div className='h-2 text-center m-t-160 m-b-40'>Our Partners</div>
      <div className='d-flex justify-content-between overflow-auto'>
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
