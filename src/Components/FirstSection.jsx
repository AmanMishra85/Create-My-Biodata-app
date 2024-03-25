import React from "react";
import CrossImage from "../Components/CrossImage";
import CrossImageTwo from "./CrossImageTwo";
import SecondSection from "../Check/SecondSection";
import ThirdSection from "./ThirdSection";

function FirstSection() {

  return (
    <div>
      <div className="bg-red-50 p-4">
        <div className="relative left-0 top-0 z-10">
          <section className="mb-28">
            <p className="text-gray-50 text-4xl font-semibold">
              biodatamaker.app
            </p>
          </section>
          <section className="sm:ml-[24vw] relative right-4 md:hidden">
            <CrossImage />
          </section>
          <section className="sm:ml-[24vw] relative right-4 hidden md:block">
            <CrossImageTwo />
          </section>
        </div>
        <div className="flex justify-center items-center h-[640px] mx-10">
          <section className="grid text-center">
            <p className="mx-4 mt-36 pb-8 flex justify-center text-3xl font-semibold leading-[50px] lg:text-4xl">
              The Ultimate Marriage Biodata Maker
            </p>
            <p className="px-2 pb-8 text-lg lg:text-xl">
              Create beautiful biodata for marriage with just a few clicks! Easy
              to use, fully customizable, elegantly designed marriage biodata
              formats
            </p>
            <section className="flex text-center justify-center gap-4">
              <button onClick={()=>{document.getElementById('bottom').scrollIntoView({behavior:'smooth'})}} className="bg-red-500 text-white p-2 rounded-full w-[160px] hover:bg-red-700 lg:text-lg lg:w-[200px]">
                Create My Biodata
              </button>
              <button onClick={()=>{document.getElementById('working').scrollIntoView({behavior:'smooth'})}} className="bg-white border-2 border-gray-400 text-gray-700 p-2 rounded-full w-[160px] hover:bg-slate-800 hover:text-white lg:text-lg lg:w-[200px] font-semibold">
                How it Works ?
              </button>
            </section>
          </section>
        </div>
        <div className="custom-shape-divider-top-1710439985">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="20%" stopColor="#a4eb9b" />
                <stop offset="35%" stopColor="#8f8af5" />
                <stop offset="55%" stopColor="#716cd6" />
                <stop offset="83%" stopColor="#ec5c3ccf" />
              </linearGradient>
            </defs>
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
