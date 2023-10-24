import Carusel from "@/components/Carusel";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import InfoCard from "../shared/InfoCard";

export default function Header({ infoCard }) {
  return (
    <div className='background'>
      <Carusel />
      <Container className='text-center'>
        <InfoCard infoCard={infoCard} />
      </Container>
    </div>
  );
}
