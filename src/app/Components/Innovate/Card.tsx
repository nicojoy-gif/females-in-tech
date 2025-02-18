// components/GridCard.tsx
import React from 'react';

interface GridCardProps {
  heading: string;
  text: string;
  
}

const GridCard: React.FC<GridCardProps> = ({ heading, text,  }) => {
  return (
    <div className=' shadow-lg bg-white rounded-md text-center flex-col flex justify-center items-center text-lg text-black p-4'>
      <div className=" text-mediumblack font-medium text-xl">{heading}</div>
      <div className="py-4 text-darkgray">{text}</div>
    </div>
  );
};

export default GridCard;
