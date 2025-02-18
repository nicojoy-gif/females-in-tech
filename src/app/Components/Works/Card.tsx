// components/GridCard.tsx
import React from 'react';

interface GridCardProps {
  Icon: React.ElementType;
  text: string;
  heading: string;
}

const GridCard: React.FC<GridCardProps> = ({ Icon, text, heading }) => {
  return (
    <div className='rounded-lg shadow-md bg-white flex-col flex text-lg p-4'>
      <div className={`h-12 w-12 bg-darkgray rounded-full flex justify-center items-center text-lg text-white p-4`} >
        <Icon className="text-white text-xl" />
      </div>
      <h2 className='py-2 font-medium text-lg text-mediumblack'>{heading}</h2>
      <div className="mt-2 text-darkgray">{text}</div>
    </div>
  );
};

export default GridCard;
