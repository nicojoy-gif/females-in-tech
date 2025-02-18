import React from 'react'
import Bosstext from './Bosstext'
import NetworkCard from './NetworkCard'

function Network() {
  return (
    <div className='w-5/6  mx-auto'>
     
        <section className='py-8'>
        <div className='lg:w-4/6 w-4/6 mx-auto flex justify-center items-center text-center'>
        <h1 className='lg:text-5xl md:text-3xl text-2xl lg:px-12 px-6 lg:leading-[73px] leading-[40px] font-medium text-mediumblack text-center'>
        Network of builders helping startup scale
        </h1>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 '>
        <NetworkCard
       
        subHeading="Work with Service Incubators to expedite your time-to-market"
        description="Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building."
        equityDetails="For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer, and growth marketer to build the MVP of your app or web application and validate it."
        learnMoreLink="/about" 
      />
        <NetworkCard
     
        subHeading="Access funding after your mvp is validated"
        description="Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape. "
        equityDetails="Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months"
        learnMoreLink="/about"
      />
      </div>
      </section>
    </div>
  )
}

export default Network