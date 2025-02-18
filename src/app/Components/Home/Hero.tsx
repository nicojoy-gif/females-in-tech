"use client"
import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../public/Assets/Image (1).png";
import { useState } from "react";

const Hero = () => {
  
const cardData = [
  {   text: " Connecting experts in product development and growth marketingnwilling to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)." },
  {  text: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.", color: "#6b8e23", heading: "Alignment Meeting and Proposal Submission" },
  {  text: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.", color: "#4682b4", heading: "Negotiation and Agreement" },
 
];

const [currentIndex, setCurrentIndex] = useState(0);

const visibleCard = cardData[currentIndex];

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
};
  return (
    <section className="bg-white z-0 w-full ">
      <div className=" h-full lg:h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center ml-4 md:ml-20">
          <div className="lg:space-y-6 space-y-3 lg:text-3xl text-[20px] lg:px-20 px-3 lg:py-24 md:py-12 pt-6 ">
            <span className=" font-medium lg:leading-[51px] md:leading-[20px] leading-10 text-mediumblack">
              SINC Partners is a service incubation company
            </span>
            <p className="text-[#4E4E4E] text-[17px] lg:leading-[39px] leading-10 lg:py-1 lg:text-2xl">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
            <Link href="/about" className="">
              <button className="bg-mediumblack rounded-full lg:mt-16 my-6 w-64 py-2 text-md flex justify-center items-center text-white font-semibold">
                SINC With Us
              </button>
            </Link>
          </div>
         
        </div>
        {/* Right Column */}
        <div className="relative w-full hidden md:block h-full">
          <Image
            src={Heroimg}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
      <div className=' justify-center absolute hidden -bottom-0 space-x-4 items-center mt-12'>
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-mediumblack' : 'bg-[#D9D9D9]'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
