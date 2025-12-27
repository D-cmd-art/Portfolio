import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  Facsharp,
  FaGit,
  FaJava,
  FaPython,
  FaCuttlefish, // used for "C"
  FaCode,       // fallback for C++
  FaMicrosoft,  // fallback for VS Code (no direct icon in fa)
} from "react-icons/fa";

const data = {
  skills: {
    sections: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML", short: "HTml", icon: FaHtml5 },
          { name: "CSS", short: "CSS", icon: FaCss3Alt },
          { name: "JavaScript", short: "JavaScript", icon: FaJs },
          { name: "React", short: "React", icon: FaReact },
          { name: "Bootstrap", short: "Bootstrap", icon: FaBootstrap },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", short: "Node.Js", icon: FaNodeJs },
          { name: "Express", short: "Express", icon: FaCode }, // fallback
          { name: "MongoDB", short: "MongoDB", icon: FaDatabase }, // if you want, use FaDatabase
          { name: "Java", short: "Java", icon: FaJava },
        ],
      },
      {
        title: "Languages",
        skills: [
          { name: "C", short: "C", icon: FaCuttlefish },
          { name: "C++", short: "C++", icon: FaCode },
          { name: "Java", short: "Java", icon: FaJava },
          { name: "Python", short: "Python", icon: FaPython },
          { name: "JavaScript", short: "JavaScript", icon: FaJs },
          {name:"c#",short:"c#",icon:FaCode},
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "Git", short: "Git", icon: FaGit },
          { name: "GitHub", short: "Github", icon: FaGithub },
          { name: "VS Code", short: "VS CODE", icon: FaMicrosoft }, // fallback
        ],
      },
    ],
  },
};

export default function SkillSection() {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-12 bg-[#1A0B2E] rounded-xl">
      <h1 className="font-Roboto text-3xl md:text-4xl text-white font-bold text-center underline decoration-4 underline-offset-4 decoration-[#0B6099]">
        Skillset
      </h1>
      <p className="text-lg md:text-xl text-[#EBEBEB] font-medium text-center max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>

      {/* Skill Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.skills.sections.map((section) => (
          <div
            key={section.title}
            className="bg-[#0F0A1B] rounded-xl p-6 shadow-lg hover:shadow-[#0B6099] transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-[#0B6099] mb-4">
              {section.title}
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
              {section.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 bg-[#1A0B2E] rounded-lg hover:bg-[#0B6099] transition-colors duration-300 cursor-pointer"
                  >
                    <Icon className="w-12 h-12 mb-2 text-white" />
                    <span className="text-white text-sm font-medium">
                      {skill.short}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}