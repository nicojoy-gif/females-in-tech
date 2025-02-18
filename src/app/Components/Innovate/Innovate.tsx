import React from 'react'
import GridCard from './Card';
import ReusableHeaderCard from '../Home/ReusableHeader';

function Innovate() {
    
const data = [
    { heading: 'Service Incubator', text: 'A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP' },
    { heading: 'Virtualting', text: 'A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource',  },
    { heading: 'Diiming', text: 'A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ',   },
   
  ];
  return (
    <div className='h-full py-16 flex flex-col space-y-12 justify-center items-center w-5/6 mx-auto'>
       
        <ReusableHeaderCard
        title='Our Concept Innovations'
        description="We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;"
      />
        <div className="grid my-6 md:grid-cols-3 md:gap-24 gap-6 grid-cols-1">
        {data.map((item, index) => (
        <GridCard
         heading={item.heading}
         
          text={item.text}
         
        />
      ))}
    </div>
    </div>
  )
}

export default Innovate