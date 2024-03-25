import React from "react";
import image from "../Images/third_.jpg";

const PageSecond = React.forwardRef(({ content }, ref) => {
  const {
    img,
    uname,
    dob,
    pob,
    rashi,
    naksh,
    height,
    gotra,
    edu,
    job,
    fname,
    fjob,
    mname,
    mjob,
    sibl,
    cperson,
    cnum,
    email,
    adrs,
  } = content;

  return (
    <div className="max-w-[830px] border-4 border-gray-500 m-4 p-2" ref={ref}>
      <div className="relative bg-slate-800 pb-2 text-gray-200 rounded-lg shadow-xl">
        <div className="py-10 px-10">
          <div className="flex justify-center text-3xl font-bold text-blue-300">
            <p>BIODATA</p>
          </div>
          <div className="flex items-center justify-between gap-4">
          <div className="w-[150px] h-[210px] overflow-hidden relative order-1">
            <img 
              src={img}
              alt="Your Image"
              className="w-full object-cover absolute top-1/2 transform -translate-y-[80px] p-1 border-4"
            />
          </div>

            <div className="text-5xl w-[70%]">{uname}</div>
          </div>
          <div className="grid gap-4 relative bottom-8">
            <section className="grid gap-1">
              <p className="mb-4 font-bold text-lg mt-8 text-blue-200 ">
                <span className="">PERSONAL DETAILS</span>
              </p>
              <div className="flex text-[17px] gap-1">
                <div className="grid gap-1 font-semibold text-emerald-200 w-[190px]">
                  <p>Date of Birth</p>
                  <p>Place of Birth</p>
                  <p>Rashi</p>
                  <p className={`${naksh === "" ? "hidden" : "block"}`}>
                    Nakashatra
                  </p>
                  <p>Height</p>
                  <p>Gotra</p>
                  <p>Education</p>
                  <p>Job/Work</p>
                </div>
                <div className="grid gap-1 font-semibold">
                  <p className="flex">
                    :&nbsp;&nbsp;&nbsp;<div>{dob}</div>
                  </p>
                  <p className="flex">
                    :&nbsp;&nbsp;&nbsp;<div>{pob}</div>
                  </p>
                  <p className="flex">
                    :&nbsp;&nbsp;&nbsp;<div>{rashi}</div>
                  </p>
                  <p className={`flex ${naksh === "" ? "hidden" : "block"}`}>
                    :&nbsp;&nbsp;&nbsp;<div>{naksh}</div>
                  </p>
                  <p className="flex">
                    :&nbsp;&nbsp;&nbsp;<div>{height} feet</div>
                  </p>
                  <p className="flex">
                    :&nbsp;&nbsp;&nbsp;<div>{gotra}</div>
                  </p>
                  <p className="flex text-wrap">
                    :&nbsp;&nbsp;&nbsp;<div>{edu}</div>
                  </p>
                  <p className="flex">
                    :&nbsp;&nbsp;&nbsp;<div>{job}</div>
                  </p>
                </div>
              </div>
            </section>
            <section>
              <p className="mb-4  font-bold text-lg text-blue-200">
                <span className="">FAMILY DETAILS</span>
              </p>
              <div className="flex gap-[33px] text-[17px]">
                <div className="grid gap-1 font-semibold text-emerald-100">
                  <p>Father's Name</p>
                  <p>Father's Occupation</p>
                  <p>Mother's Name</p>
                  <p>Mother's Occupation</p>
                  <p className={`${sibl === "" ? "hidden" : "block"}`}>
                    Siblings
                  </p>
                </div>
                <div className="grid gap-1 font-semibold">
                  <p>:&nbsp;&nbsp;&nbsp;{fname}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{fjob}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{mname}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{mjob}</p>
                  <p className={`${sibl === "" ? "hidden" : "block"}`}>
                    :&nbsp;&nbsp;&nbsp;{sibl}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <p className="mb-2 font-bold text-lg text-blue-200">
                <span className="">CONTACT DETAILS</span>
              </p>
              <div className="flex gap-[74px]">
                <div className="grid gap-1 font-semibold text-emerald-200">
                  <p>Contact Person</p>
                  <p>Contact Number</p>
                  <p>Email ID</p>
                  <p>Address</p>
                </div>
                <div className="grid gap-1 font-semibold">
                  <p>:&nbsp;&nbsp;&nbsp;{cperson}</p>
                  <p>:&nbsp;&nbsp;&nbsp;+91 {cnum}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{email}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{adrs}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PageSecond;
