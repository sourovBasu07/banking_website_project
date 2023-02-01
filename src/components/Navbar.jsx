import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar w-full flex justify-between items-center py-6">
      <img src={logo} alt="Banking" className="w-[124px] h-[32px]" />
      <ul className="hidden sm:flex flex-1 justify-end items-center list-none">
        {navLinks.map((nav, index) => (
          <li
            className={`font-normal font-poppins text-[16px] cursor-pointer ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            key={nav.id}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 justify-end items-center sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`sidebar min-w-[140px] ${
            !toggle ? "hidden" : "flex"
          } absolute top-20 right-0 bg-black-gradient mx-4 my-2 p-6 rounded-xl`}
        >
          <ul className="flex flex-col flex-1 justify-end items-start list-none">
            {navLinks.map((nav, index) => (
              <li
                className={`font-medium font-poppins text-[16px] cursor-pointer ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                key={nav.id}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
