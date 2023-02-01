import React from "react";

import styles, { layout } from "../style";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`feature-card flex flex-row rounded-[20px] p-6 ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      }`}
    >
      <div
        className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}
      >
        <img src={icon} alt="Star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="font-semibold font-poppins text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-normal font-poppins text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
