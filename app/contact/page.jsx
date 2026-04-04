
"use client";
import React, { useState } from "react";


export default function ContactPage() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(name,email,message);
   let result= await fetch ("/api/form",{
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
    <div className="min-h-screen bg-[#1A0B2E] flex items-center justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-md sm:max-w-xl bg-[#FFFFFF] rounded-lg shadow-lg p-5 sm:p-7">
        <h1 className="text-purple-600 text-xl sm:text-2xl text-center mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border p-3 sm:p-2 rounded border-blue-500 placeholder-gray-400 bg-transparent text-black w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="border p-3 sm:p-2 rounded border-blue-500 placeholder-gray-400 bg-transparent text-black w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Enter Your Message"
            className="border p-3 sm:p-2 rounded border-blue-500 placeholder-gray-400 bg-transparent text-black-400 resize-none h-24 w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 sm:p-2 rounded hover:bg-blue-900 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
