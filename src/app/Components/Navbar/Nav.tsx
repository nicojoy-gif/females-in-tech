"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../../public/Assets/SINC LOGO black outline 1.png";
import Link from "next/link";

interface NavBarProps {
  sections?: string[]; // Make sections optional
}

export const NavBar: React.FC<NavBarProps> = ({ sections = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="bg-lightgrey fixed z-50 top-0 w-full p-4 shadow-md">
      <div className="lg:w-5/6 w-full lg:mx-auto flex justify-between items-center">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center w-full space-x-5">
          <Link href="/">
            <div className="flex items-center w-full space-x-5">
              <Image src={logo} alt="logo" className="w-auto h-12" />
            </div>
          </Link>
          <div className="lg:hidden flex">
            <button onClick={toggleMenu} className="text-2xl text-mediumblack">
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 font-medium text-lg">
          {sections.length > 0 &&
            sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className="text-mediumblack hover:text-black"
              >
                {section}
              </button>
            ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex mx-6 space-x-6">
          <Link href="/contact">
            <button className="bg-darkblue rounded-full w-36 py-2 text-white font-semibold">
              Contact Us
            </button>
          </Link>
          <button className="bg-mediumblack rounded-full w-44 py-2 text-white font-semibold">
            Apply to SIP 1.0
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-lightgrey mt-4 space-y-4 p-4 rounded-lg shadow-md">
          {sections.length > 0 &&
            sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className="text-mediumblack hover:text-black w-full text-center"
              >
                {section}
              </button>
            ))}
          <Link href="/contact">
            <button className="bg-darkblue rounded-full w-full py-2 text-white font-semibold">
              Contact Us
            </button>
          </Link>
          <button className="bg-mediumblack rounded-full w-full py-2 text-white font-semibold">
            Apply to SIP 1.0
          </button>
        </div>
      )}
    </nav>
  );
};

