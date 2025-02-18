import React from "react";
import ReusableHeaderCard from "../Home/ReusableHeader";
import companylog from "../../../../public/Assets/Company logo (1).png";

import companylogo from "../../../../public/Assets/Company logo (2).png";

import companylogo1 from "../../../../public/Assets/Company logo.png";

import companylogo2 from "../../../../public/Assets/Frame 1000002471.png";
import Image from "next/image";
import Location from "./Equitext";
import CompanyCard from "./Equitygrid";
import { FaArrowRight } from "react-icons/fa";
function Equity() {
  const locations = [
    { label: "LOCATION", city: "Abuja, Nigeria" },
    { label: "INDUSTRY", city: "On-demand print" },
    { label: "EQUITY", city: "1.2%" },
    { label: "STIPEND", city: "NGN 200,000/mth" },
    { label: "DEADLINE", city: "24th, January 2024" },

    { label: "ROLE-TYPE", city: "Full-time" },
  ];
  return (
    <div className="w-5/6 lg:py-12 py-0 my-8 mx-auto flex flex-col justify-center items-center">
      <ReusableHeaderCard
        title="Equity jobs"
        description="See companies and startups offering equity or a mix of cash and equity for very important position in their company"
      />
      <div className="grid md:grid-cols-2 my-8 lg:grid-cols-4 grid-cols-1 gap-4">
        <div>
        <CompanyCard
          companyLogo={companylogo2}
          description="This company is a SAAS Startup that builds AI copy generator..."
          positionTitle="Chief Executive Officer"
          locations={locations}
        />
        </div>
        <div className="hidden md:block">
        <CompanyCard
          companyLogo={companylogo1}
          description="This company is a SAAS Startup that builds AI copy generator..."
          positionTitle="Chief Executive Officer"
          locations={locations}
        />
        </div>
        <div className="hidden md:block">
        <CompanyCard
          companyLogo={companylog}
          description="This company is a SAAS Startup that builds AI copy generator..."
          positionTitle="Chief Executive Officer"
          locations={locations}
        />
        </div>
        <div className="hidden md:block">
        <CompanyCard
          companyLogo={companylogo}
          description="This company is a SAAS Startup that builds AI copy generator..."
          positionTitle="Chief Executive Officer"
          locations={locations}
        />
        </div>
        
      </div>
      <div className="hidden md:block">
      <div className="my-12 flex justify-center text-center items-center">
          <div className="font-semibold flex justify-center text-center items-center underline text-mediumblack">
            See More Equity Jobs
            <p className="mx-2">
              <FaArrowRight />
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Equity;
