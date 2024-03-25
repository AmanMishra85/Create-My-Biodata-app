import React from "react";

function ThirdSection() {
  return (
    <div className="bg-gray-100 h-[1250px] md:h-[600px]">
      <div className="mx-6 lg:mx-24">
        <div className="grid justify-center text-4xl font-semibold pt-10 mb-10" id="working">
          <p>How it works</p>
        </div>
        <div className="mx-2 grid gap-8 mb-8 md:flex">
          <section className="text-center bg-white px-8 pb-12 pt-16 rounded-lg grid gap-4 shadow-xl md:w-[33%]">
            <div className="flex justify-center">
              <p className="bg-pink-200 w-12 h-12 flex justify-center items-center text-2xl rounded-[100%]">
                1
              </p>
            </div>
            <div className="text-2xl font-semibold text-gray-700">Enter Your information</div>
            <div className="text-gray-700">
              Simply add your personal, family and contact details. You can also
              add a profile photo for your biodata
            </div>
          </section>
          <section className="text-center bg-white px-8 pb-12 pt-16 rounded-lg grid gap-4 shadow-lg md:w-[33%]">
            <div className="flex justify-center">
              <p className="bg-yellow-200 w-12 h-12 flex justify-center items-center text-2xl rounded-[100%]">
                2
              </p>
            </div>
            <div className="text-2xl font-semibold text-gray-700">Choose the template</div>
            <div className="text-gray-700">
              Create biodata with our wide variety of well-designed templates. Just select the template and we will do the rest.
            </div>
          </section>
          <section className="text-center bg-white px-8 pb-12 pt-16 rounded-lg grid gap-4 shadow-lg md:w-[33%]">
            <div className="flex justify-center">
              <p className="bg-emerald-300  w-12 h-12 flex justify-center items-center text-2xl rounded-[100%]">
                3
              </p>
            </div>
            <div className="text-2xl font-semibold text-gray-700">Download the PDF</div>
            <div className="text-gray-700">
                Everyting is done now, you will get your beautiful biodata in the PDF format. Thanks for using our marriage biodata maker!!
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
