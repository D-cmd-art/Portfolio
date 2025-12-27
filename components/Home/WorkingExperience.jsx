import React from "react";
import styles from "./work.module.css";

        
// JSON-like data (same page)
const experienceData = [
  {
    company: "College Project",
    role: "Full Stack developer",
    Project:"Library Management System",
    year: "2024-2025",
    href:"https://github.com/D-cmd-art/library",
  },
  {
    company: "Bhok Express",
    role: "Ecommerce Web Application",
    Project:"Bhok Express",
    year: "2024 - 2025",
    href:"https://bhokexpress.com/",
  },
  {
    company: "Ecommerce ",
    role: "Seerus Makeover",
    Project:"Ecommerce Web Application",
    year: "2023 - 2024",
    href:"https://github.com/D-cmd-art/library",
  },
  {
    company: "Bhok Express",
    role: "Mobile Application",
    Project:"Bhok Express",
    year: "2024 - 2025",
    href:"https://bhokexpress.com/",
  },
  
];



export default function WorkingExperience() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Working Experience and Projects</h2>

      <div className={styles.grid}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.company}</h3>
            <p>{item.role}</p>
            <p>{item.Project}</p>
            <span>{item.year}</span>
        <a 
  href={item.href} 
  target="_blank" 
  rel="noopener noreferrer" 
  className={styles.button}
>
  View
</a>
          </div>
          
        ))}
      </div>
    </section>
  );
}