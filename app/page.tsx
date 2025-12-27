import React from "react";
import Header from "@/components/Home/HeroSection";
import Skill from "@/components/Home/SkillSection";
import Work from "@/components/Home/WorkingExperience";
import About from "@/components/Home/about";
import Projects from"@/components/Home/Projects";
export default function Home() {
  return (
   <div className="bg-[#1A0B2E]">
    
   <Header/>
   <Skill/>
   <Work/>
   
   <About/>

   
   </div>
  );
}
