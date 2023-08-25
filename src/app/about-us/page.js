"use client";
import Layout from "@/components/Layout";
import { Container } from "react-bootstrap";
import Image from "next/image";
import EducationInfo from "@/sections/about-us/EducationInfo";
import Video from "@/sections/shared/Video";
import TeamMembers from "@/sections/about-us/TeamMembers";

export default function AboutUS() {
  const images = [
    {
      id: 1,
      image: "avatar",
      position: "pos-1",
    },
    {
      id: 2,
      image: "avatar",
      position: "pos-2",
    },
    {
      id: 3,
      image: "avatar",
      position: "pos-3",
    },
    {
      id: 4,
      image: "avatar",
      position: "pos-4",
    },
    {
      id: 5,
      image: "avatar",
      position: "pos-5",
    },
    {
      id: 6,
      image: "avatar",
      position: "pos-6",
    },
    {
      id: 7,
      image: "avatar",
      position: "pos-7",
    },
  ];

  return (
    <Layout>
      <Container className='text-center vh-100 d-flex flex-column align-items-center justify-content-center position-relative'>
        <div className='h-1'>
          We help <span className='blue'>individuals</span> <br /> to grow up in
          IT sphere
        </div>
        <div className='pr-3 black m-t-12'>Powered by ITPARK</div>
        {images.map((item) => (
          <Image
            key={item.id}
            src={`/images/${item.image}.png`}
            alt='avatar'
            height={96}
            width={96}
            className={`${item.position}`}
          />
        ))}
      </Container>
      <EducationInfo />
      <Video />
      <TeamMembers />
    </Layout>
  );
}
