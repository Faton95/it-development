import Carusel from "@/components/Carusel";
import React from "react";
import { Container } from "react-bootstrap";
import InfoCard from "../shared/InfoCard";

const infoData = {
  title: "Don't you know your interest?",
  description:
    "Take this career test to pick IT specialization which fits your personality",
  buttonText: "Career test",
};

const Header = () => {
  return (
    <div className='background'>
      <Container className='text-center'>
        <div className='h-1 black m-t-72 m-b-12'>
          Start your bright <br /> IT career as{" "}
          <span className='blue'>Cyber Security</span>
        </div>
        <div className='pr-3 black m-b-40'>Powered by ITPARK</div>
        {/* <Carusel /> */}
        <InfoCard data={infoData} />
      </Container>
    </div>
  );
};

export default Header;
