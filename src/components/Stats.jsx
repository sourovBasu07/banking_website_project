import React from "react";

import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        className={`flex flex-1 justify-start items-center m-3`}
        key={stat.id}
      >
        <h4 className="font-semibold font-poppins text-white xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px]">
          {stat.value}
        </h4>
        <p className="font-normal font-poppins text-gradient xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
