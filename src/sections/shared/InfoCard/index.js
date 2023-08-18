import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const InfoCard = ({ data }) => {
  return (
    <Card classes='m-t-160 m-b-160 p-t-56 p-b-56 background-light-blue-50'>
      <div className='h-2 black'>{data.title}</div>
      <div className='pr-1 black m-t-16 m-b-32 text-break'>
        {data.description}
      </div>
      <Button classes=''>{data.buttonText}</Button>
    </Card>
  );
};

export default InfoCard;
