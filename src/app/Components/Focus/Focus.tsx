import React from 'react'
import GridCard from './Card';
import ReusableHeaderCard from '../Home/ReusableHeader';

function Focus() {

const data = [
    { number: '01', text: 'Business Support & Incubation', color: 'mediumblack' },
    { number: '02', text: 'On-Demand & As-A-Service', color: 'orangelight' },
    { number: '03', text: 'Marketplace & Crowdsourcing', color: 'redlight' },
    { number: '04', text: 'Aggregation & Shared Economy', color: 'darkblue' },
    { number: '05', text: 'Decentralized Economy & Digital Assets', color: 'redlight' },
  ];
  return (
    <div className='h-full lg:py-16  py-7 flex flex-col space-y-12 justify-center items-center w-5/6 mx-auto'>
        
        <ReusableHeaderCard
        title='Our Area of Focus'
        description="In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab"
      />
        <div className="grid bg-redlight gap-12 my-6 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 ">
      {data.map((item, index) => (
        <GridCard
          key={item.number}
          number={item.number}
          text={item.text}
          color={item.color}
        />
      ))}
    </div>
    </div>
  )
}

export default Focus