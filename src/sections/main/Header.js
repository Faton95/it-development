import Carusel from "@/components/Carusel";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import InfoCard from "../shared/InfoCard";
import { useSearchParams } from "next/navigation";

const data = {
  0: "ReactJS",
  1: "VueJS",
  2: "NodeJS",
  3: "Python",
  4: "Machine Learning",
};

export default function Header({ infoCard }) {
  const [state, setState] = useState(false);
  const searchParams = useSearchParams();

  const search = searchParams.get("id") || 0;

  useEffect(() => {
    setState(search);
  }, [state, search]);

  return (
    <div className='background'>
      <Container className='text-center'>
        <div className='h-1 black m-t-72 m-b-12'>
          Start your bright
          <br />
          <div className='d-inline-block'>
            <div>IT career as</div>
            <div key={data[search]} className={`blue typewriter`}>
              {data[search]}
            </div>
          </div>
        </div>
        <div className='pr-3 black m-b-40'>Powered by ITPARK</div>
      </Container>
      <Carusel />
      <Container className='text-center'>
        <InfoCard infoCard={infoCard} />
      </Container>
    </div>
  );
}
