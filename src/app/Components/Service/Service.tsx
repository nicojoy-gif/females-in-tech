import React from "react";
import ReusableHeaderCard from "../Home/ReusableHeader";
import poly1 from "../../../../public/Assets/Polygon 3.png";
import poly2 from "../../../../public/Assets/Polygon 3 (1).png";
import poly3 from "../../../../public/Assets/Polygon 3 (2).png";
import GridCard from "./Card";
import { FaArrowRight } from "react-icons/fa";
function Service() {
  const data = [
    {
      heading: poly1,
      text: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support",
    },
    {
      heading: poly2,
      text: "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment",
    },
    {
      heading: poly3,
      text: "Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return",
    },
  ];
  return (
    <div className="w-5/6 mx-auto">
      <div className="h-full py-16 flex flex-col space-y-12 justify-center items-center ">
        <ReusableHeaderCard
          title="Our Service Incubation Model"
          description="The Service Incubation model is an alternate funding model for startups that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as being first to invest."
        />
      </div>

      <div className=" lg:justify-start justify-center mx-auto lg:text-start text-center flex flex-col items-center lg:items-start">
        <h1 className="text-mediumblack font-medium text-3xl py-3">
          Hypothesis
        </h1>
        <p className="font-darkblack">
          Just a few reasons we know its time for this model
          within the ecosystem
        </p>
      </div>
      <div className="grid py-6 md:grid-cols-3 lg:gap-24 md:gap-12 gap-6 grid-cols-1">
        {data.map((item, index) => (
          <GridCard key={index} heading={item.heading} text={item.text} />
        ))}
      </div>

      <div className=" lg:justify-start justify-center mx-auto mb-8 lg:text-start text-center flex flex-col items-center lg:items-start">
        <h1 className="text-mediumblack font-medium text-3xl py-3">
          Case Study
        </h1>
        <p className="font-darkblack">
          See what Service Incubators get, the maths behind Service Equity
          (SEEQ) and what the value of your share equity can be over time
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-6 items-center gap-6">
        <div className="bg-white px-8 py-2 text-lg text-darkblack border rounded-full border-lightgray">
          Service Incubator Equity
        </div>
        <div className="bg-white px-8 py-2 text-lg text-darkblack border rounded-full border-lightgray">
          SEEQ Maths Equation
        </div>
        <div className="bg-white px-8 whitespace-nowrap py-2 text-lg text-darkblack border rounded-full border-lightgray">
          Value of my Equity Over Time
        </div>
      </div>
      <div className="my-12 flex justify-center items-center">
<div className="font-semibold flex justify-center items-center underline text-mediumblack">
Become A Service Incubator
<p className='mx-2'><FaArrowRight /></p>

</div>
      </div>
    </div>
  );
}

export default Service;
