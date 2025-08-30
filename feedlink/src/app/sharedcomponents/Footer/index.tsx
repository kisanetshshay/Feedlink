// components/Footer.tsx
"use client"
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-green-900 text-white px-6 py-10 font-sans">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
      <div className="flex flex-col min-w-[200px] flex-1">
        <div className="flex items-center gap-2 font-bold text-3xl mb-3">
          <Image src="/Logo.svg" alt="FeedLink Logo" width={44} height={44} priority />
          <span className="text-[#FF8614] font-sans tracking-wide">FEEDLINK</span>
        </div>
        <p className="font-semibold text-lg mb-2 leading-relaxed">
          Transforming food waste into impact <br />
          through intelligent connections <br />
          between producers, consumers, and recyclers.
        </p>
        <p className="text-green-200 font-medium mb-0">
          Building a sustainable food ecosystem for everyone.
        </p>
      </div>
      <div className="min-w-[160px] flex-1">
        <h4 className="text-xl font-semibold mb-3">Platform</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-[#FF8614] transition-colors">
              How it works
            </a>
          </li>
        </ul>
      </div>
      <div className="min-w-[160px] flex-1">
        <h4 className="text-xl font-semibold mb-3">For Users</h4>
        <ul className="space-y-2">
          {["Food Producers", "Consumers", "Recyclers", "Explore"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[#FF8614] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="min-w-[160px] flex-1">
        <h4 className="text-xl font-semibold mb-3">Company</h4>
        <ul className="space-y-2">
          {["About Us", "Impacts", "Contacts"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[#FF8614] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <hr className="border-[#FF8614] border-t-2 mt-8 mb-4" />
    <p className="text-center text-white text-lg">
      © 2025 FeedLink. All rights reserved.
    </p>
  </footer>
);

export default Footer;
