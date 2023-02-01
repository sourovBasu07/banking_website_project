import React from "react";

import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`} id="product">
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="Billing"
          className="relative w-full h-full z-[5]"
        />
        <div className="absolute -left-1/2 top-0 w-1/2 h-1/2 z-[3] rounded-full white__gradient" />
        <div className="absolute -left-1/2 bottom-0 w-1/2 h-1/2 z-0 rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="Apple_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
