"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.jpg" alt="Maxx Hospital Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-900 leading-tight">Maxx Hospital</h1>
              <p className="text-xs text-gray-500 font-medium">& Maternity Centre</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
            <Link href="/" className="text-medical-600 font-bold">Home</Link>
            <Link href="/about" className="hover:text-medical-600 transition">About Us</Link>
            <Link href="/facilities" className="hover:text-medical-600 transition">Facilities</Link>
            <Link href="/specialties" className="hover:text-medical-600 transition">Specialties</Link>
            <Link href="/doctors" className="hover:text-medical-600 transition">Doctors</Link>
            <Link href="/appointment" className="hover:text-medical-600 transition">Appointment</Link>
            <Link href="/contact" className="hover:text-medical-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 text-2xl focus:outline-none">
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 flex flex-col gap-4 pt-4">
            <Link href="/" className="block text-medical-600 font-bold" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-medical-600 font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/facilities" className="block text-gray-700 hover:text-medical-600 font-medium" onClick={() => setIsOpen(false)}>Facilities</Link>
            <Link href="/specialties" className="block text-gray-700 hover:text-medical-600 font-medium" onClick={() => setIsOpen(false)}>Specialties</Link>
            <Link href="/doctors" className="block text-gray-700 hover:text-medical-600 font-medium" onClick={() => setIsOpen(false)}>Doctors</Link>
            <Link href="/appointment" className="block text-gray-700 hover:text-medical-600 font-medium" onClick={() => setIsOpen(false)}>Appointment</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-medical-600 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
