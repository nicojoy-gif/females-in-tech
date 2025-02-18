// components/GridCard.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";

interface GridCardProps {
  heading: StaticImageData;
  text: string;
}

const GridCard: React.FC<GridCardProps> = ({ heading, text }) => {
  return (
    <div className=" shadow-lg bg-white rounded-md  flex-col flex text-lg text-black p-4">
      <div>
        <Image src={heading} alt="Hero Image" className="" />
      </div>

      <div className="py-4 text-darkgray">{text}</div>
    </div>
  );
};

export default GridCard;
