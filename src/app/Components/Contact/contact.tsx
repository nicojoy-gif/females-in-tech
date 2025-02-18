// src/pages/contact.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { NavBar } from "../Navbar";
export const Contacts = () => {
  return (
    <div>
        <NavBar sections={["About", "SP", "Studio", "SEEQ", "Platforms", "Initiatives", "More"]} />

    <div className="bg-gray-100 min-h-screen mt-12 py-12">
      <section className="text-center mb-10">
        <motion.h1
          className="lg:text-5xl text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We’re here to help. Reach out to us for any inquiries or concerns.
        </motion.p>
      </section>

      {/* Form and Map Grid */}
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Get In Touch
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-3 border resize-none border-gray-300 rounded-lg"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map Integration */}
        <motion.div
          className="w-full h-full rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.160652460496!2d6.97085323763737!3d4.806054734761095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce8d8adee1d5%3A0x36b75e72bc406d6!2sBack%20Of%20Mile%203%20Police%20Station%2C%201%20Bisi%20Ejekwu%20St%2C%20Woji%2C%20Port%20Harcourt%20500101%2C%20Rivers!5e0!3m2!1sen!2sng!4v1730008346447!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Information */}
      <motion.div
        className="max-w-7xl mx-auto px-7 gap-6 mt-12 grid lg:grid-cols-2 grid-cols-1 bg-white rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div>
          <h2 className="lg:text-3xl text-2xl font-semibold text-primary mb-4 ">
            Contact Information
          </h2>
          <div className="grid grid-cols-1  gap-3">
            <div className="flex items-center lg:w-3/4 w-full text-wrap mb-4">
              <FaMapMarkerAlt className="text-primary mr-3" size={24} />
              <span className="text-gray-700">
                No 1B Ejekwu Close, off Woji St, Opposite 19 Estate Road, Woji,
                Port Harcourt.
              </span>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-primary mr-3" size={24} />
              <span className="text-gray-700">+2308033394565</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-primary mr-3" size={24} />
              <span className="text-gray-700">
              Sinc@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h2 className="lg:text-3xl text-2xl font-semibold text-primary mb-4  ">
            Business Hours
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center mb-4">
              <FaClock className="text-primary mr-3" size={24} />
              <span className="text-gray-700">
                Monday - Friday: 9:00 AM - 5:00 PM
              </span>
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="text-primary mr-3" size={24} />
              <span className="text-gray-700">
                Saturday: 10:00 AM - 2:00 PM
              </span>
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="text-primary mr-3" size={24} />
              <span className="text-gray-700">Sunday: Closed</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};