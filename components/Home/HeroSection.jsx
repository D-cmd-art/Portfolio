import React from "react";
import Image from "next/image";
import Photo from "@/assets/photo.png";
import Arrow from "@/assets/arrow.png";
const Header = () => {
  return (
    <section className="bg-[#1A0B2E] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          
          {/* Image */}
          <div>
            <Image
              src={Photo}
              alt="Profile"
              className="w-44 h-44 rounded-full border-4 border-purple-500 shadow-lg object-cover"
            />
          </div>
          <div className="w-20 h-20 py-2">
            <Image src={Arrow}
            alt="arrow"
            className=""/>
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">
              Hello, I am SANJIB THAPA
            </p>

            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
              A Creative Designer, and Developer
            </h1>

            <p className="text-gray-300 leading-relaxed mb-2">
              I judge a book by its cover —
            </p>

            <p className="text-gray-400 leading-relaxed">
              because if the cover doesn’t impress you,
              how can it impress anyone else?
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
