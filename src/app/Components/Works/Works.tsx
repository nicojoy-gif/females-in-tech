"use client"
import React, { useState } from 'react';
import GridCard from './Card';
import { FaArrowRight, FaArrowLeft, FaBeer, FaCoffee, FaApple } from 'react-icons/fa'; // Import more icons
import ReusableHeaderCard from '../Home/ReusableHeader';

const cardData = [
  { Icon: FaBeer, text: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.", color: "#ff6347", heading: "Application and Selection" },
  { Icon: FaCoffee, text: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.", color: "#6b8e23", heading: "Alignment Meeting and Proposal Submission" },
  { Icon: FaApple, text: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.", color: "#4682b4", heading: "Negotiation and Agreement" },
  { Icon: FaBeer, text: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.", color: "#ff6347", heading: "Application and Selection" },
  { Icon: FaCoffee, text: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.", color: "#6b8e23", heading: "Alignment Meeting and Proposal Submission" },
  { Icon: FaApple, text: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.", color: "#4682b4", heading: "Negotiation and Agreement" },
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCard = cardData[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const visibleCards = cardData.slice(currentIndex, currentIndex + 3);


  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='block md:hidden text-center text-lg font-medium text-mediumblack'>Service Incubation Process</div>
      <div className='hidden md:flex justify-center items-center'>
        <ReusableHeaderCard
          title="How It Works"
          description="Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."
        />
      </div>
      <div className=' grid-cols-1 hidden md:grid my-8 sm:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-8 p-4'>
        {visibleCards.map((item, index) => (
          <GridCard
            key={index}
            Icon={item.Icon}
            text={item.text}
           
            heading={item.heading}
          />
        ))}
      </div>
      {/* Grid Card Section */}
      <div className='grid grid-cols-1 my-8 md:hidden w-5/6 mx-auto gap-8 p-4'>
        <GridCard
          Icon={visibleCard.Icon}
          text={visibleCard.text}
          heading={visibleCard.heading}
          
        />
      </div>

      {/* Navigation Buttons */}
      <div className='flex items-center justify-center space-x-6'>
        <button
          onClick={prevSlide}
          className='border w-12 flex items-center justify-center h-12 border-mediumblack p-3 rounded-full shadow-lg'
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className='border w-12 flex items-center justify-center h-12 border-mediumblack p-3 rounded-full shadow-lg'
          disabled={currentIndex === cardData.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className=' justify-center flex md:hidden space-x-4 items-center mt-12'>
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-mediumblack' : 'bg-[#D9D9D9]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
