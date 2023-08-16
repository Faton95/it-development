import Button from "@/components/Button";
import Card from "@/components/Card";
import Carusel from "@/components/Carusel";
import React from "react";
import { Container } from "react-bootstrap";

const style = {
  width: 297,
  height: 296,
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
        <Card classes='m-t-160 m-b-160 p-t-56 p-b-56 background-light-blue-50'>
          <div className='h-2 black'>Don&apos;t you know your interest?</div>
          <div className='pr-1 black m-t-16 m-b-32'>
            Take this career test to pick IT specialization <br /> which fits
            your personality
          </div>
          <Button classes=''>Career test</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Header;
