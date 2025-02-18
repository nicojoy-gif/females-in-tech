"use client"
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(`Email submitted: ${email}`);
  };

  return (
    <div className="bg-mediumblack text-white py-10 px-5 sm:px-10">
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-3xl font-medium mb-4">Newsletter</h2>
        <p className="mb-6 lg:w-1/3 w-full">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
        <form onSubmit={handleSubmit} className="flex relative lg:flex-row flex-col justify-center items-center">
          <input
            type="email"
            className="p-3 bg-mediumblack lg:w-96 w-64 rounded-3xl border border-[#676767] text-gray-900"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="bg-white absolute -right-16 text-blacks hover:bg-blue-700 py-3 px-8 rounded-3xl  font-bold">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
