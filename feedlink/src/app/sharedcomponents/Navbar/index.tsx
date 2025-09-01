"use client";

import React, { useState } from "react";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

return (
<nav className="bg-gradient-to-r from-[#244809] to-[#34630a] py-4 sticky top-0 z-50">
{}
<div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
{}
<div className="flex items-center gap-2 ml-5">
<img src="logo.svg" alt="Logo" className="h-10 w-auto " />
<span className="text-orange-400 font-medium text-xl sm:text-3xl  tracking-tight">
FEEDLINK
</span>
</div>

{}
<ul className="hidden lg:flex items-center gap-7 text-white text-lg font-bold mr-11">
<li className="hover:text-orange-400 cursor-pointer">Home</li>
<li className="hover:text-orange-400 cursor-pointer">Impacts</li>
<li className="hover:text-orange-400 cursor-pointer">About us</li>
<li className="hover:text-orange-400 cursor-pointer">FAQ</li>
<li className="hover:text-orange-400 cursor-pointer">Team</li>
<li className="hover:text-orange-400 cursor-pointer">Explore</li>
<li className="hover:text-orange-400 cursor-pointer">Contacts</li>
</ul>

{}
<div className="lg:hidden">
<button
onClick={() => setMenuOpen(!menuOpen)}
aria-label="Toggle Menu"
className="text-white focus:outline-none"
>
<svg
className="w-8 h-8"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
{menuOpen ? (
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M6 18L18 6M6 6l12 12"
/>
) : (
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M4 6h16M4 12h16M4 18h16"
/>
)}
</svg>
</button>
</div>
</div>

{/* Mobile Menu (only for <lg) */}
<div
className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
}`}
>
<ul className="flex flex-col mt-4 space-y-4 text-white text-lg font-medium px-4 sm:px-6">
<li className="hover:text-orange-500 cursor-pointer">Home</li>
<li className="hover:text-orange-500 cursor-pointer">Impacts</li>
<li className="hover:text-orange-500 cursor-pointer">About us</li>
<li className="hover:text-orange-500 cursor-pointer">FAQ</li>
<li className="hover:text-orange-500 cursor-pointer">Team</li>
<li className="hover:text-orange-500 cursor-pointer">Explore</li>
<li className="hover:text-orange-500 cursor-pointer">Contacts</li>
</ul>
</div>
</nav>
);
};

export default Navbar;
	