import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
const Contacts = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10 px-4 md:px-8">
      <h1 className="text-[36px] font-bold text-brand-green text-center mb-10">
        Get in Touch
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-9 items-stretch">
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl font-bold text-brand-orange mb-6">
            Send us a message
          </h2>
          <div className="flex-1 border-[3px] border-brand-green px-10 py-8 bg-white h-full">
            <form className="flex flex-col gap-6 h-full">
              <div>
                <p className="text-2xl font-bold mb-2">First name:</p>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-bold text-gray-700 placeholder:text-gray-400 outline-none focus:border-brand-green transition"
                />
              </div>
              <div>
                <p className="text-2xl font-bold mb-2">Last name:</p>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-bold text-gray-700 placeholder:text-gray-400 outline-none focus:border-brand-green transition"
                />
              </div>
              <div>
                <p className="text-2xl font-bold mb-2">Email:</p>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-bold text-gray-700 placeholder:text-gray-400 outline-none focus:border-brand-green transition"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-2xl font-bold mb-2">Message:</p>
                <textarea
                  placeholder="Text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-bold text-gray-700 placeholder:text-gray-400 outline-none focus:border-brand-green transition resize-none flex-grow"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green text-white text-lg font-bold rounded-md py-3 shadow-sm transition"
              >
                <Send size={22} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl font-bold text-brand-green mb-6">
            Contact Information
          </h2>
          <div className="flex-1 border-[3px] border-brand-orange px-10 py-8 bg-white h-full">
            <p className="text-2xl font-bold mb-8 leading-relaxed">
              Have questions about our platform? Need support? Want to partner with us? We&apos;re here to help and would love to hear from you.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-brand-green" strokeWidth={2} />
                <div>
                  <p className="text-lg font-bold">Call Us</p>
                  <p className="text-lg font-bold">+254 717641949</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-brand-green" strokeWidth={2} />
                <div>
                  <p className="text-lg font-bold">Email Us</p>
                  <a
                    href="mailto:feedlink@gmail.com"
                    className="text-lg font-bold underline"
                  >
                    feedlink@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-brand-green" strokeWidth={2} />
                <p className="text-lg font-bold">Working hours</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-brand-green" strokeWidth={2} />
                <p className="text-lg font-bold">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;