import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Location from './Equitext';

// Define the interface for the Location object
interface LocationProps {
  label: string;
  city: string;
}

// Define the interface for the CompanyCard props
interface CompanyCardProps {
  companyLogo: StaticImageData;
  description: string;
  positionTitle: string;
  locations: LocationProps[];
}

const CompanyCard: React.FC<CompanyCardProps> = ({ companyLogo, description, positionTitle, locations }) => {
  return (
    <div className='bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto lg:max-w-4xl'>
      <div className='flex flex-col space-y-4'>
        
       
        <div className='flex lg:justify-center justify-start'>
          <Image src={companyLogo} alt='company logo' className='w-32 h-auto' />
        </div>
        
       
        <div className='text-sm text-mediumblack '>
          {description}
        </div>
        
       
        <h3 className='font-medium text-lg '>{positionTitle}</h3>
        
       
        <div className='grid gap-4 grid-cols-2'>
          {locations.map((location, index) => (
            <Location key={index} Label={location.label} City={location.city} />
          ))}
        </div>
        
       
        <div className='flex '>
          <button className='bg-mediumblack w-40 rounded-full py-2 text-white font-semibold hover:bg-gray-800'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
