import React from "react";

const PageOne = React.forwardRef(({content}, ref) => {

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
      ref={ref}
      className="max-w-[750px] max-h-[1000px] border-4 border-[#Beb872] mx-8 my-8"
    >
      <div>
        <div className="border-4 border-[#Beb872] rounded-2xl m-2 p-4">
          <div className="flex justify-center text-3xl m-4 font-bold text-[#Df8c17]">
            <p>BIODATA</p>
          </div>
          <div className="mx-2 my-8 grid gap-6 pl-[20px]">
            <section>
              <p className="mb-4 font-bold text-lg text-[#Df8c17]">
                <span className="">PERSONAL DETAILS</span>
              </p>
              <div className="flex gap-28">
                <div className="grid gap-1 font-semibold text-[#A75704]">
                  <p>Name</p>
                  <p>Date of Birth</p>
                  <p>Place of Birth</p>
                  <p>Rashi</p>
                  <p className={`${naksh === ''?'hidden':'block'}`}>Nakashatra</p>
                  <p>Height</p>
                  <p>Gotra</p>
                  <p>Education</p>
                  <p>Job/Work</p>
                </div>
                <div className="grid gap-1 font-semibold">
                  <p>:&nbsp;&nbsp;&nbsp;{uname}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{dob}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{pob}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{rashi}</p>
                  <p className={`${naksh === ''?'hidden':'block'}`}>:&nbsp;&nbsp;&nbsp;{naksh}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{height} feet</p>
                  <p>:&nbsp;&nbsp;&nbsp;{gotra}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{edu}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{job}</p>
                </div>
              </div>
            </section>
            <section>
              <p className="mb-4  font-bold text-lg text-[#Df8c17]">
                <span className="">FAMILY DETAILS</span>
              </p>
              <div className="flex gap-[58px]">
                <div className="grid gap-1 font-semibold text-[#A75704]">
                  <p>Father's Name</p>
                  <p>Father's Occupation</p>
                  <p>Mother's Name</p>
                  <p>Mother's Occupation</p>
                  <p className={`${sibl === ''?'hidden':'block'}`}>Siblings</p>
                </div>
                <div className="grid gap-1 font-semibold">
                  <p>:&nbsp;&nbsp;&nbsp;{fname}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{fjob}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{mname}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{mjob}</p>
                  <p className={`${sibl === ''?'hidden':'block'}`}>:&nbsp;&nbsp;&nbsp;{sibl}</p>
                </div>
              </div>
            </section>
            <section>
              <p className="mb-4 font-bold text-lg text-[#Df8c17]">
                <span className="">CONTACT DETAILS</span>
              </p>
              <div className="flex gap-[10px]">
                <div className="grid gap-1 font-semibold text-[#A75704] w-[200px]">
                  <p>Contact Person</p>
                  <p>Contact Number</p>
                  <p>Email ID</p>
                  <p>Address</p>
                </div>
                <div className="grid gap-1 font-semibold">
                  <p>:&nbsp;&nbsp;&nbsp;{cperson}</p>
                  <p>:&nbsp;&nbsp;&nbsp;+91 {cnum}</p>
                  <p>:&nbsp;&nbsp;&nbsp;{email}</p>
                  <p>
                    :&nbsp;&nbsp;&nbsp;{adrs}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PageOne;
