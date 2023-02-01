import React from "react";

import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      id="home"
    >
      <div
        className={`flex-col flex-1 ${styles.flexStart} xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex items-center bg-discount-gradient rounded-[10px] mb-2 px-4 py-[6px]">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="w-full flex justify-between items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="w-full font-semibold font-poppins ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`relative flex flex-1 ${styles.flexCenter} md:my-0 my-10`}
      >
        <img
          src={robot}
          alt="billings"
          className="relative w-full h-full z-[5]"
        />
        <div className="absolute top-0 w-[40%] h-[35%] z-[0] pink__gradient" />
        <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full z-[1] white__gradient" />
        <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-[0] blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
