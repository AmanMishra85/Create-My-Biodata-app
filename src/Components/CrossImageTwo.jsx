import React from "react";
import first from "../Images/PageOne.png";
import second from "../Images/PageTow.png";
import third from "../Images/PageThree.png";

function CrossImageTwo() {
  return (
    <div>
      <div className="relative -top-20">
        <section className="absolute">
          <img src={first} className={`w-[270px] h-[320px] relative -left-28 z-0 -rotate-12 top-4`} />
        </section>
        <section className="absolute">
          <img src={third} className={`w-[270px] h-[320px] relative left-12 z-20`} />
        </section>
        <section className="absolute">
          <img src={second} className={`w-[270px] h-[320px] relative left-[220px] z-10 rotate-12 top-4`} />
        </section>
      </div>
    </div>
  );
}


export default CrossImageTwo;
