// components/GridCard.tsx
import React from 'react';

interface GridCardProps {
  number: string;
  text: string;
  color: string;
  heading: string;
}

const GridCard: React.FC<GridCardProps> = ({ number, text, color, heading }) => {
  return (
    <div className=' rounded-lg shadow-md bg-white flex-col flex  text-lg p-4'>
    <div className={`bg-${color} h-12 w-12 rounded-full flex-col flex justify-center items-center text-lg text-white p-4  `}>
      <div className=" ">{number}</div>
      </div>
      <h2 className='py-2 font-medium text-lg text-mediumblack'>{heading}</h2>
      <div className="mt-2 text-darkgray">{text}</div>
   
    </div>
  );
};

export default GridCard;
