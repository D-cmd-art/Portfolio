"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A0B2E]/90 backdrop-blur-sm text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-purple-400">ST</span>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex gap-6 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-purple-400 transition-colors duration-200 text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1A0B2E] border-t border-purple-800/50">
          <ul className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="block py-2 hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
