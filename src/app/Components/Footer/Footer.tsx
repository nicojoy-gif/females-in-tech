// components/Footer.tsx
import React from "react";
import logo from "../../../../public/Assets/SINC LOGO white outline 1.png";
import Image from "next/image";
import acclogo from "../../../../public/Assets/Frame 48877.png";
import gau from "../../../../public/Assets/GASUS white SVG-01 1.png";
import chat from "../../../../public/Assets/Frame 49241.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-mediumblack text-lightergray py-10 px-12 sm:px-0">
      <div className="grid lg:grid-cols-7 lg:border-y border-lightergrey py-4 gap-6 mx-auto grid-cols-1 sm:grid-col-2 ">
        <div className=" grid col-span-5 lg:px-12 px-0 grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="flex flex-col col-span-2 lg:col-span-1 ">
            <div>
              <Image src={logo} alt="logo" />
            </div>
            <p className="text-sm w-full py-3 leading-[27px] font-light">
              SINC Partners is a service incubation company connecting experts
              in product development and growth marketing willing to offer their
              services to amazing startups in exchange for minute equity
              (usually 0.5% to 2%)
            </p>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Platforms</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Kofoundme
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kofoundme
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">
              Initiatives
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kofoundme
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">More</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:border-l sm:border-none border-lightergrey lg:px-4 px-0">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Locations</h3>
            <ul className="text-white space-y-3 ">
              <li>
                <a href="#" className="hover:underline">
                  Abuja, Nigeria{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lagos, Nigeria
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Philadelphia, USA
                </a>
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-4">
              <Image src={chat} alt="logo" />
              <Image src={acclogo} alt="acc logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full lg:p-12 p-2 text-lightgray justify-between  font-medium">
        <p className="text-sm ">
          Guaranteed 2x on your service or cash investment, usually been the
          first to invest.{" "}
          <span className="text-white">
            Get in early and SINC your guaranty!
          </span>
        </p>
        <div className="flex lg:flex-row flex-col items-center space-x-3">
          <div className="sm:my-4 my-0">
            <Image src={gau} alt="gausu" />
          </div>
          <div>
            <p className="text-sm font-light lg:w-1/2 w-full">
              We are a business built on the foundation of Christian values and
              belief
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-8 mx-0 flex lg:flex-row flex-col ">
        <div className="flex lg:px-8 px-0 my-2 lg:flex-row flex-col w-full  justify-between text-white font-medium">
          <p>2023 SINC Partners Ltd. All rights reserved</p>
          <div className="flex items-center justify-center flex-col">
            <div className="flex my-2 items-center text-xs lg:text-md space-x-4">
              <p className="underline">Privacy Policy</p>

              <p className="underline">Terms of Service</p>

              <p className="underline">Security</p>
            </div>
            <div className="hidden md:block">Web In Nigeria</div>
          </div>
          <div className="flex my-2 justify-center items-center space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />

            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
