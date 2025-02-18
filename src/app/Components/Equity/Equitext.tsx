import React from 'react';
interface LocationProps {
    Label: string;
    City: string;
  }
  
  
  const Location: React.FC<LocationProps> = ({ Label, City }) => {
  
  return (
    <div className='text-sm py-2'>
      <p className='text-greyys'>{Label}</p>
      <p className='py-2 text-mediumblack'>{City}</p>
    </div>
  );
};


export default Location;
