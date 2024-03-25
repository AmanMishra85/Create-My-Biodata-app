import React from "react";
import first from "../Images/PageOne.png";
import second from "../Images/PageTow.png";
import third from "../Images/PageThree.png";

function CrossImage() {
  return (
    <div>
      <div className="relative">
        <section className="absolute">
          <img src={first} className={`w-[120px] h-[160px] relative left-10 z-0 -rotate-12 top-4`} />
        </section>
        <section className="absolute">
          <img src={third} className={`w-[120px] h-[160px] relative left-32 z-20`} />
        </section>
        <section className="absolute">
          <img src={second} className={`w-[120px] h-[160px] relative left-[220px] z-10 rotate-12 top-4`} />
        </section>
      </div>
    </div>
  );
}


export default CrossImage;
