'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQITEMS: FAQItem[] = [
  {
    question: "How do I get started as a food producer?",
    answer: "Simply sign up on our platform, verify your business, and start listing your surplus inventory. We'll handle the rest!",
  },
  {
    question: "How do you ensure food safety?",
    answer: "We verify producers, enforce strict safety guidelines, and ensure all food meet quality standards.",
  },
  {
    question: "Is there a cost to use FeedLink?",
    answer: "Basic usage is free, However, premium features and services may come with a subscription or transaction fee.",
  },
  {
    question: "Can individuals use the platform?",
    answer: "Yes, individuals can sign up as consumers to access discounted quaity food",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-brand-green text-center">Frequently Asked Questions</h1>
      
      {FAQITEMS.map((item: FAQItem, index: number) => (
        <div key={index} className="mb-4 rounded-2xl overflow-hidden bg-brand-orange">
          <div 
            className="flex justify-between items-center cursor-pointer p-4"
            onClick={() => toggleOpen(index)}
          >
            <h3 className="font-semibold text-white text-2xl">{item.question}</h3>
            {openIndex === index ? <ChevronUp className="text-white size-10"/> : <ChevronDown className="text-white size-10"/>}
          </div>
          
          {openIndex === index && (
            <div className="px-4 pb-4 bg-brand-orange ">
              <p className="text-white font-bold text-xl">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;