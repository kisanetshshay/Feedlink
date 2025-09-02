import React from "react";

const Footer = () => {
return (
<footer className="bg-[#305006] px-4 sm:px-6 lg:px-8 py-10 text-white">
<div className="max-w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-12">

<div className="md:w-1/3 flex-shrink-0">
<div className="flex items-center mb-4 space-x-2">
<img src="Logo.svg" alt="Logo" className="h-10 w-auto md:h-12" />
<span className="text-orange-400 font-semibold text-2xl md:text-3xl lg:text-4xl">
FEEDLINK
</span>
</div>
<p className="mb-4 leading-relaxed text-sm md:text-base lg:text-lg max-w-sm">
Transforming food waste into impact through intelligent connections
between producers, consumers, and recyclers.
</p>
<p className="text-xs md:text-sm lg:text-base leading-snug max-w-sm">
Building a sustainable food ecosystem for everyone.
</p>
</div>


<div className="flex flex-col md:flex-row justify-between md:w-2/3 text-sm md:text-base lg:text-lg font-medium gap-8 md:gap-12">
<div>
<p className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
Platform
</p>
<p className="cursor-pointer hover:text-orange-400">How it works</p>
</div>

<div>
<p className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
For Users
</p>
<p className="cursor-pointer hover:text-orange-400">Food Producers</p>
<p className="cursor-pointer hover:text-orange-400">Consumers</p>
<p className="cursor-pointer hover:text-orange-400">Recyclers</p>
<p className="cursor-pointer hover:text-orange-400">Explore</p>
</div>

<div>
<p className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
Company
</p>
<p className="cursor-pointer hover:text-orange-400">About Us</p>
<p className="cursor-pointer hover:text-orange-400">Impacts</p>
<p className="cursor-pointer hover:text-orange-400">Contacts</p>
</div>
</div>
</div>


<hr className="border-orange-400 my-8 mx-2 md:mx-6" />
<p className="text-center text-xs md:text-sm lg:text-base px-2 md:px-6">
© 2025 FeedLink. All rights reserved.
</p>
</footer>
);
};

export default Footer;
	


	
