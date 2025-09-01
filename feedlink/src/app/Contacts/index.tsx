import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10 px-2">
      
      <h1 className="text-[32px] font-bold text-brand-green text-center mb-8">
        Get in Touch
      </h1>
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 items-stretch">
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-semibold text-brand-orange mb-5">
            Send us a message
          </h2>
          <div className="flex-1 border-[5px] border-brand-green px-7 py-6 bg-white">
            <form className="flex flex-col gap-4 h-full">
              <div>
                <p className="text-xl font-bold mb-1">
                  First name:
                </p>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border-[1.5px] border-gray-300 rounded-[6px] px-3 py-2 text-[15px] font-normal text-gray-700 placeholder:text-gray-400 outline-none transition"
                />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">
                  Last name:
                </p>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border-[1.5px] border-gray-300 rounded-[6px] px-3 py-2 text-[15px] font-normal text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#18841e] transition"
                />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">
                  Email:
                </p>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border-[1.5px] border-gray-300 rounded-[6px] px-3 py-2 text-[15px] font-normal text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#18841e] transition"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-xl font-bold mb-1">
                  Message:
                </p>
                <textarea
                  placeholder="Text ......"
                  className="w-full border-[1.5px] border-gray-300 rounded-[6px] px-3 py-2 text-[15px] font-normal text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#18841e] transition resize-none flex-grow"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green text-white text-[17.5px] font-medium rounded-[6px] py-[10px] shadow-sm transition"
              >
                <Send />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-semibold text-brand-green mb-5">
            Contact Information
          </h2>
          <div className="flex-1 border-[5px] border-brand-orange px-10 py-6 bg-white">
            <p className="text-xl font-bold mb-7">
              Have questions about our platform? Need support? Want to partner with
              us? We&apos;re here to help and would love to hear from you.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Phone
                  className="w-[22px] h-[22px] text-[#18841e]"
                  strokeWidth={2}
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold mb-1">
                    Call Us
                  </span>
                  <span className="text-xl font-bold mb-1">
                    +254 717641949
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="w-[22px] h-[22px] text-[#18841e]"
                  strokeWidth={2}
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold mb-1">
                    Email Us
                  </span>
                  <a
                    href="mailto:feedlink@gmail.com"
                    className=" font-bold mb-1"
                  >
                    feedlink@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock
                  className="w-[22px] h-[22px] text-[#18841e]"
                  strokeWidth={2}
                />
                <span className="text-xl font-bold mb-1">
                  Working hours
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin
                  className="w-[22px] h-[22px] text-[#18841e]"
                  strokeWidth={2}
                />
                <span className="text-xl font-bold mb-1">Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
