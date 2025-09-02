'use client'
import Image from "next/image";
import Button from "../../sharedcomponents/Button"; // Make sure path is correct

export default function HeroSection() {
  return (
    <section className="w-full min-h-[435px] flex items-center bg-gradient-to-r from-[#244809] to-[#34630a] px-0">
      <div className="w-full max-w-[1650px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-0 pt-0 pb-0">
        {}
        <div className="flex-1 w-full md:pl-10 flex flex-col justify-center h-full items-start">
          <div>
            <h1 className="text-white font-semibold text-[2rem] xs:text-[2.1rem] sm:text-[2.2rem] md:text-6xl leading-snug mb-9 mt-9">
              Transform Food 
              Wastage Into <span className="text-orange-400 font-bold">Impact!</span>
            </h1>
            <p className="text-white text-base xs:text-lg sm:text-2xl font-normal mb-9">
              Reduce waste, feed communities, and create
              <br />
              sustainable value chains.
            </p>
          </div>

          {/* BUTTONS: Using Shared Client Component */}
          <div className="flex flex-row gap-4 xs:gap-9 mb-8 w-full flex-wrap">
            <Button variant="primary" onClick={() => console.log("Start Reducing Waste")}>
              Start Reducing Waste
            </Button>
            <Button variant="secondary" onClick={() => console.log("Learn How It Works")}>
              Learn How It Works
            </Button>
          </div>

          {/* DOWNLOAD */}
          <div className="flex items-center gap-1 mt-1 mb-6 xs:mb-0">
            <span className="text-white text-base xs:text-lg">Download on Google</span>
            <span className="ml-2 text-base xs:text-lg font-bold text-white">
              Play <span className="text-green-300">Store</span>
            </span>
            <Image
              src="/playstore.png"
              alt="Play Store"
              width={28}
              height={28}
              className="ml-"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full flex items-center justify-center md:pr-10 mt-8 md:mt-0">
          <div className="bg-white rounded-full border-[5px] sm:border-[6px] border-orange-400 flex items-center justify-center w-[180px] h-[180px] xs:w-[230px] xs:h-[230px] sm:w-[270px] sm:h-[270px] md:w-[320px] md:h-[320px]">
            <Image
              src="/basket.png"
              alt="Basket"
              width={195}
              height={195}
              className="object-contain w-[120px] h-[120px] xs:w-[160px] xs:h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}