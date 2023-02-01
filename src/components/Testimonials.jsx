import React from "react";

import { feedbacks } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`relative ${styles.flexCenter} flex-col ${styles.paddingY}`}
    >
      <div className="absolute -right-[50%] bottom-40 w-[60%] h-[60%] rounded-full blue__gradient z-[0]" />
      <div className="relative w-full flex md:flex-row flex-col justify-between items-center sm:mb-16 mb-6 z-[1]">
        <h2 className={`${styles.heading2}`}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`max-w-[470px] ${styles.paragraph} text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="feedback-container relative w-full flex flex-wrap sm:justify-start justify-center z-[1]">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
