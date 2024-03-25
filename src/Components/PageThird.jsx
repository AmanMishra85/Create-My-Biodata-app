import React from "react";
import image from "../Images/fourth_.png";

const PageThird = React.forwardRef(({ content }, ref) => {
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
    <div
      className="max-w-[750px] border-4 border-[#a79524bf] m-4 p-2"
      ref={ref}
    >
      <div className="relative bg-[#f6dbb8] rounded-lg">
        <div className="p-10 bottom-[20px]">
          <div className="flex relative bottom-6 justify-center text-3xl font-bold text-[#c54442]">
            <p>BIODATA</p>
          </div>
          <div className="w-[160px] h-[160px]  overflow-hidden relative rounded-full">
            <img
              src={img}
              alt="Your Image"
              className="w-full object-cover absolute top-1/2 transform -translate-y-[80px]"
            />
          </div>

          <div>
            <div className="grid gap-4 -mt-2 relative">
              <section className="grid gap-1">
                <p className="mb-2 font-bold text-lg mt-8 text-[#c54442]">
                  <span className="">PERSONAL DETAILS</span>
                </p>
                <div className="flex gap-[140px] text-[17px] text-[#252e53]">
                  <div className="grid gap-1 font-semibold">
                    <p>Name</p>
                    <p>Date of Birth</p>
                    <p>Place of Birth</p>
                    <p>Rashi</p>
                    <p className={`${sibl === "" ? "hidden" : "block"}`}>
                      Nakashatra
                    </p>
                    <p>Height</p>
                    <p>Gotra</p>
                    <p>Education</p>
                    <p>Job/Work</p>
                  </div>
                  <div className="grid gap-1 font-semibold">
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{uname}</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{dob}</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{pob}</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{rashi}</div>
                    </p>
                    <p className={`flex ${sibl === "" ? "hidden" : "block"}`}>
                      :&nbsp;&nbsp;&nbsp;<div>{naksh}</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{height} feet</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{gotra}</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{edu}</div>
                    </p>
                    <p className="flex">
                      :&nbsp;&nbsp;&nbsp;<div>{job}</div>
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <p className="mb-2 font-bold text-lg text-[#c54442]">
                  <span className="">FAMILY DETAILS</span>
                </p>
                <div className="flex gap-[83px] text-[17px] text-[#252e53]">
                  <div className="grid gap-1 font-semibold">
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
                <p className="mb-2 font-bold text-lg text-[#c54442]">
                  <span className="">CONTACT DETAILS</span>
                </p>
                <div className="flex gap-[48px] text-[#252e53]">
                  <div className="grid gap-1 w-[200px] font-semibold">
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
    </div>
  );
});

export default PageThird;
