import React from "react";

export default function FooterPage() {
  return (
    <footer className="bg-[#1A0B2E] text-gray-300 body-font">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo / Name */}
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <span className="ml-3 text-xl font-semibold text-white">Designed By Sanjib Thapa</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 sm:ml-4 sm:border-l-2 sm:border-gray-600 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2025 All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            {/* Facebook */}
            <svg fill="currentColor" stroke="none" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            {/* Twitter */}
            <svg fill="currentColor" stroke="none" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
            {/* Instagram */}
            <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            {/* LinkedIn */}
            <svg fill="currentColor" stroke="none" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
