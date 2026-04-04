import React from "react";
import Image from "next/image";
import Photo from "@/assets/photo.png"
import Link from "next/link";

export default function aboutPage(){
    return(
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 pt-10 pb-16 px-4 sm:px-6 bg-[#1A0B2E]">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0">
                <Image 
                  src={Photo} 
                  alt="photo" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="max-w-2xl text-center lg:text-left">
                 <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold pb-4 sm:pb-6">About Me</p>
                 <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                   I am a Computer Science student passionate about building
                   innovative software solutions and learning new technologies.
                   I enjoy developing web and mobile applications, exploring 
                   algorithms, and solving challenging problems. My goal is
                   to create projects that have a real-world impact while 
                   continuously improving my skills.
                 </p>
  
            
            </div>
        </div>
    );
};