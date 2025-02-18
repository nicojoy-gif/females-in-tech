import React from "react";
import ReusableHeaderCard from "../Home/ReusableHeader";
import GridCard from "./Card";
import { FaArrowRightLong } from "react-icons/fa6";

function Found() {
  const data = [
    {
      number: "1",
      text: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
      color: "mediumblack",
      heading: "We Ideate",
    },
    {
      number: "2",
      text: "You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions",
      color: "orangelight",
      heading: "You Validate",
    },
    {
      number: "3",
      text: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
      color: "redlight",
      heading: "You Co-own",
    },
  ];
  return (
    <div className="flex flex-col w-5/6 mx-auto items-center">
      <ReusableHeaderCard
        title="Co-found With Us"
        description="We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed"
      />
      <div className="grid gap-6  my-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {data.map((item, index) => (
          <GridCard
            key={index}
            number={item.number}
            text={item.text}
            color={item.color}
            heading={item.heading}
          />
        ))}
      </div>
      <div className="my-12 flex justify-center items-center">
        <div className="font-semibold flex items-center text-darkgray underline">
          Build your dream
          <p className="mx-2">
            <FaArrowRightLong />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Found;
