import React from "react";

import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="feedback-card max-w-[370px] flex flex-col justify-between rounded-[20px] md:mr-10 sm:mr-5 mr-0 px-10 py-12">
      <img
        src={quotes}
        alt="Double-quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-normal font-poppins text-[18px] text-white leading-[32.4px] my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold font-poppins text-[20px] text-white leading-[32px]">
            {name}
          </h4>
          <p className="font-normal font-poppins text-[16px] text-dimWhite leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
