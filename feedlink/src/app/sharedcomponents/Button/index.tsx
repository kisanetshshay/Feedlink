
"use client"
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

const Buttons: React.FC = () => {
  return (
    <div className="flex gap-8 items-center justify-center">
     
      <button
        className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
        onClick={() => alert("Start Reducing Waste clicked")}
      >
        Start Reducing Waste
      </button>

      
      <button
        className="border-2 border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
        onClick={() => alert("Learn How It Works clicked")}
      >
        Learn How It Works
      </button>
    </div>
  );
};

export default Buttons;
