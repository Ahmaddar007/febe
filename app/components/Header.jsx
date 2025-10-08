"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons from lucide-react
import Image from "next/image";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center h-20 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <Image
          src="/febe.png"
          alt="logo"
          width={200}
          height={200}
          className="bg-blend-color-burn object-cover"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium">
          <li className="cursor-pointer hover:text-green-700 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-green-700 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-green-700 transition">
            Shop
          </li>
          <li className="cursor-pointer hover:text-green-700 transition">
            Festival
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <button className="text-lg px-6 py-2 font-semibold border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition">
            Explore
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center text-gray-800"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
            <li className="cursor-pointer hover:text-green-700 transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-green-700 transition">
              About
            </li>
            <li className="cursor-pointer hover:text-green-700 transition">
              Shop
            </li>
            <li className="cursor-pointer hover:text-green-700 transition">
              Festival
            </li>
            <li>
              <button className="mt-2 text-lg px-6 py-2 font-semibold border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition">
                Explore
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
