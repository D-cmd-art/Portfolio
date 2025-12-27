
"use client";
import React, { useState } from "react";


export default function ContactPage() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(name,email,message);
   let result= await fetch (" http://localhost:3000/api/form",{
    method:"POST",
    body:JSON.stringify({userName:name,email,message})

   });
   result=await result.json();
  if(result.success){
    return alert("new message added");

  } 
      e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
 };

  return (
    <div className="mx-auto bg-[#1A0B2E] bg-cover bg-center w-full h-screen flex items-center rounded justify-center">
      <div className="relative p-7 max-w-xl mx-auto bg-[#32fa43] rounded-lg shadow-lg">
        <h1 className="text-purple-600 text-2xl text-center mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col px-7 py-7 gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border p-2 rounded border-blue-500 placeholder-white bg-transparent text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="border p-2 rounded border-blue-500 placeholder-white bg-transparent text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Enter Your Message"
            className="border p-2 rounded border-blue-500 placeholder-white bg-transparent text-white resize-none h-24"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
