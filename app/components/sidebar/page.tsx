"use client";

import { useState } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { LuTableProperties } from "react-icons/lu";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-16"} bg-gray-800 text-white h-screen transition-width duration-300`}>
      {/* Sidebar Content */}
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <h1 className={`${isOpen ? "block" : "hidden"} text-lg font-semibold`}> </h1>
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow mt-4">
          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded"
              >
                <span className="material-icons">home</span>
                {isOpen && <span><HiHome/> </span>}
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded"
              >
                <span className="material-icons">Properties</span>
                {isOpen && <span><LuTableProperties/></span>}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded"
              >
                <span className="material-icons">info</span>
                {isOpen && <span>About</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gray-700">
          <p className={`${isOpen ? "block" : "hidden"} text-sm`}>© 2025 My App</p>
        </div>
      </div>
    </div>
  );
}
