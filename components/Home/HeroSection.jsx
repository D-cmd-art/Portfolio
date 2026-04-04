import React from "react";
import Image from "next/image";
import Photo from "@/assets/photo.png";

const Header = () => {
  return (
    <section className="bg-[#1A0B2E] py-20 pt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-center lg:text-left">
          
          <div className="order-2 lg:order-1">
            <Image
              src={Photo}
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full border-4 border-purple-500 shadow-lg object-cover mx-auto lg:mx-0"
            />
          </div>

          <div className="order-1 lg:order-2 max-w-lg">
            <p className="text-purple-400 text-xs sm:text-sm uppercase tracking-widest mb-2">
              Hello, I am SANJIB THAPA
            </p>

            <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold mb-4 leading-tight">
              A FULL STACK WEB DEVELOPER
            </h1>

            <p className="text-gray-400 leading-relaxed">
           
I craft modern, scalable web applications with a focus on performance, clean architecture, and seamless user experiences.  

With expertise in **React, TailwindCSS, Node.js, and API integrations**, I thrive on building robust solutions that bridge frontend elegance with backend reliability. My approach emphasizes modular design, defensive programming, and production-ready workflows — ensuring every project is both maintainable and resilient.  
Whether it’s developing dynamic dashboards, authentication flows, or integrating complex APIs, I’m passionate about turning ideas into reliable, user-friendly products.  
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
