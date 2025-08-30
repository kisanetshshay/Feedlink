// components/Navbar.tsx
"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Impacts", href: "/impacts" },
  { name: "About us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Explore", href: "/explore" },
  { name: "Contacts", href: "/contacts" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 px-5 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2 font-bold text-2xl">
          <Image src="/Logo.svg" alt="FeedLink Logo" width={36} height={36} priority />
          <span className="text-[#FF8614] font-sans tracking-wide">FEEDLINK</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-xl font-semibold hover:text-[#f4c430] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center h-10 w-10"
        >
          <span
            className={`block h-1 w-7 bg-[#FF8614] mb-1 transition-transform ${
              menuOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <span
            className={`block h-1 w-7 bg-[#FF8614] mb-1 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-1 w-7 bg-[#FF8614] transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-green-800 text-white rounded-b-md shadow-md mt-2">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b last:border-none border-green-900">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-7 py-3 font-semibold text-lg hover:text-[#f4c430] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
