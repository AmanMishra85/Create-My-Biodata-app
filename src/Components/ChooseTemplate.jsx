import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import first from "../Images/PageOne.png";
import second from "../Images/PageTow.png";
import third from "../Images/PageThree.png";
import html2pdf from "html2pdf.js";
import PageOne from "./PageOne";
import PageSecond from "./PageSecond";
import PageThird from "./PageThird";

function ChooseTemplate() {
  const location = useLocation();
  const myData = location.state || {};

  const [image, setImage] = useState(null);
  const myComponent1 = useRef(null);
  const myComponent2 = useRef(null);
  const myComponent3 = useRef(null);

  const handlePdfToPdf1 = () => {
    html2pdf()
      .from(myComponent1.current)
      .set({ format: "A4", dpi: 300 })
      .save(myData.uname+" BioData1.pdf");
  };

  const handlePdfToPdf2 = () => {
    html2pdf()
      .from(myComponent2.current)
      .set({ format: "A4", dpi: 300 })
      .save(myData.uname+" BioData2.pdf");
  };

  const handlePdfToPdf3 = () => {
    html2pdf()
      .from(myComponent3.current)
      .set({ format: "A4", dpi: 300 })
      .save(myData.uname+" BioData3.pdf");
  };

  return (
    <div>
      <div  id="template">
        <section className="bg-slate-800 text-white p-6 text-3xl md:text-4xl text-center">
          <p>Biodatamaker.app</p>
        </section>
        <section className="bg-gray-300 text-lg md:text-xl text-center p-2">
          <p>Choose One Template and Download</p>
        </section>
        <div className="md:flex md:items-center md:justify-evenly gap-2 lg:gap-28 bg-pink-100">
          <section className="flex justify-evenly md:grid md:w-[500px] lg:w-[35%] md:overflow-auto md:h-[748px] ">
            <button className="my-8" onClick={() => setImage(first)}>
              <img src={first} className="w-36 h-48 lg:w-52 lg:h-64 hover:shadow-xl md:hover:scale-125 transition-transform transform origin-center delay-100 duration-150" />
            </button>
            <button className="my-8" onClick={() => setImage(second)}>
              <img src={second} className="w-36 h-48  lg:w-52 lg:h-64 hover:shadow-xl md:hover:scale-125 lg:hover:scale-110 transition-transform transform origin-center delay-100 duration-150" />
            </button>
            <button className="my-8" onClick={() => setImage(third)}>
              <img src={third} className="w-36 h-48  lg:w-52 lg:h-64 hover:shadow-xl md:hover:scale-125 transition-transform transform origin-center delay-100 duration-150" />
            </button>
          </section>
          <section className="md:hidden">
            <div
              className={`flex mb-8 justify-center items-center h-[450px] mx-8 border-4 border-gray-500 rounded-sm ${
                image ? "hidden" : "block"
              } `}
            >
              <p className="text-xl sm:text-4xl text-gray-500">
                Preview Templates
              </p>
            </div>
          </section>
          <section className="md:w-[1200px] lg:w-[80%]">
            <div className="flex justify-center md:h-[720px] lg:h-[750px] lg:w-[650px] items-center md:border-4 md:border-gray-500 md:bg-violet-200 md:w-[90%] lg:mt-8">
              <div className={`${image ? "hidden" : "block"}`}>

                <p className="hidden md:block text-4xl text-gray-600 relative top-8 ">Preview Template</p>
              </div>
              <div className="flex justify-center items-center">
              <img src={image} className="h-[90%] md:w-[93%] lg:w-[80%]" />
              </div>
            </div>
          </section>
        </div>
        <section
          className={`flex justify-center items-center pb-6 ${
            image ? "block" : "hidden"
          } bg-pink-100`}
        >
          <div className="hidden">
            {image === third} ?{" "}
            <PageThird ref={myComponent3} content={myData} />:{image === second}{" "}
            ? <PageSecond ref={myComponent2} content={myData} />:
            {image === first}? <PageOne ref={myComponent1} content={myData} />
            :""
          </div>
          <button
            className="bg-blue-500 text-white  px-6 py-3 mt-4 md:text-xl text-lg w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] relative lg:left-24 md:left-24 rounded-lg"
            onClick={
              image === first
                ? handlePdfToPdf1
                : image === second
                ? handlePdfToPdf2
                : image === third
                ? handlePdfToPdf3
                : ""
            }
          >
            Download Your BioData of this Template
          </button>
        </section>
      </div>
    </div>
  );
}

export default ChooseTemplate;
