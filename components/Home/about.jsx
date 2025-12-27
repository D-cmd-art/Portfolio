import React from "react";
import Image from "next/image";
import Photo from "@/assets/photo.png"
export default function aboutPage(){
    return(
      <div className=" flex justify-center pt-10 bg-[#1A0B2E]  ">
            <div >
                <Image src={Photo} alt="photo"  />

            </div>
            <div>
                 <p className="text-white text-2xl font-bold pb-6 "> About Me</p>
                 <p className=" text-white">I am a Computer Science student passionate about building<br/> innovative software solutions and learning new technologies.<br/> I enjoy developing web and mobile applications, exploring <br/>algorithms, and solving challenging problems. My goal is<br/>
                     to create projects that have a real-world impact while <br/>continuously improving my skills.</p>
            <button className="bg-blue-500 px-6 py-2 rounded-2xl hover:bg-green-600 ">Projects</button>
            </div>
        </div>
    );
};