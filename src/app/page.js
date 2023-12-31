"use client";
import Header from "@/sections/main/Header";
import Stories from "@/sections/main/Stories";
import Layout from "@/components/Layout";
import UsefulLinks from "@/sections/shared/UsefulLinks";
import Partners from "@/sections/main/Partners";
import Universities from "@/sections/main/Universities";
import Courses from "@/sections/main/Courses";

const data = [
  {
    title: "OMUC",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Ticket",
  },
  {
    title: "Compensation for IT learning",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Graduated",
  },
  {
    title: "IT-Skills",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "ShieldDone",
  },
  {
    title: "IT-Bilim",
    description:
      "There are over 10,000 professional courses available on the Coursera platform, and completion of these courses",
    icon: "Brain",
  },
];

export default function Home() {
  return (
    <Layout>
      <Header />
      <Stories />
      <Courses />
      <UsefulLinks data={data} />
      <Universities />
      <Partners />
    </Layout>
  );
}
