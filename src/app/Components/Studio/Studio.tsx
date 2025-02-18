import React from "react";
import ReusableHeaderCard from "../Home/ReusableHeader";
import logo from "../../../../public/Assets/Frame 100.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const logos = Array(32).fill(logo);

export function Studio() {
  return (
    <div className="flex justify-center flex-col items-center" id="Studio">
      <ReusableHeaderCard
        title="Our Studio Portfolio"
        description="Our 2024 Service Incubator Portfolio Companies"
      />
      <div className="grid md:w-5/6 w-full mx-8 my-8 md:mx-auto lg:grid-cols-8 grid-cols-4 gap-4 p-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <div className="mb-24 flex justify-center items-center">
        <div className="font-semibold underline flex items-center space-x-2 text-mediumblack">
          View All Companies
          <p className="mx-2">
            <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
}

