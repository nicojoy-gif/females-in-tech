// components/GridCard.tsx
import React from 'react';

interface GridCardProps {
  number: string;
  text: string;
  color: string;
}

const GridCard: React.FC<GridCardProps> = ({ number, text, color }) => {
  return (
    <div className={`bg-${color} lg:h-40 h-32 lg:w-64 w-full flex-col flex justify-between text-lg text-white p-4  `}>
      <div className=" ">{number}</div>
      <div className="mt-2">{text}</div>
    </div>
  );
};

export default GridCard;
