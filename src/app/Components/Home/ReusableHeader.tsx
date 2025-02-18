import React from 'react';

interface HeaderCardProps {
  title: string;
  description: string;
}

const ReusableHeaderCard: React.FC<HeaderCardProps> = ({ title, description }) => {
  return (
    <div className='h-1/2 lg:w-4/6 w-full sm:mx-5 flex justify-center items-center flex-col text-center space-y-5'>
      <h1 className='text-mediumblack font-medium lg:text-5xl md:text-3xl text-xl'>{title}</h1>
      <p className='text-darkgray lg:text-lg text-sm'>{description}</p>
    </div>
  );
}

export default ReusableHeaderCard;
