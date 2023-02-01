import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
      <div className={`w-full ${styles.flexStart} md:flex-row flex-col mb-8`}>
        <div className="flex flex-col flex-1 justify-start mr-10">
          <img
            src={logo}
            alt="Banking"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`max-w-[312px] ${styles.paragraph} mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="w-full flex flex-row flex-[1.5] flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className={`min-w-[150px] flez flex-col ss:my-0 my-4`}
            >
              <h4 className="font-medium font-poppins text-[18px] text-white leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal font-poppins text-[16px] text-dimWhite hover:text-secondary leading-[24px] cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between items-center border-t-[1px] border-t-[#3F3E45] pt-6">
        <p className="font-normal font-poppins text-center text-[18px] text-white leading-[27px]">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
