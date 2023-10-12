import { useState } from "react";
import burger from "../assets/icons/burger.svg";
import close from "../assets/icons/close.svg";

const Nav = () => {
  const [stat, setStat] = useState(false);

  const handleOpenClick = () => {
    setStat(true);
  };

  const handleCloseClick = () => {
    setStat(false);
  };

  return (
    <section className="relative md:flex md:px-9 md:py-2 md:justify-between">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <div
          id="left"
          className="text-lg font-bold text-white font-clash md:text-3xl"
        >
          get<span className="text-[#D434FE]">linked</span>
        </div>

        {/* Burger Icon */}
        <div id="right" className="md:hidden">
          <button onClick={handleOpenClick}>
            <img src={burger} className="cursor-pointer" alt="Burger Icon" />
          </button>
        </div>
      </nav>

      {/* Nav PopUp (Mobile Screen) */}

      {/* Emma, i tried hard to add add transition to this nav popup to no avail, so please help out */}
      <div
        id="popup"
        className={`bg-[#150E28] absolute w-[90%] h-[25rem] background-filter border-solid border-[0.5px] border-[rgba(255, 255, 255, 0.04)] left-1/2 top-56 -translate-x-1/2 -translate-y-1/2 p-4 space-y-10 transition-all ease-in delay-100 z-50 md:static md:items-center md:z-0 md:left-0 md:flex md:top-0 md:translate-y-0 md:translate-x-0 md:space-y-0 md:p-4 md:bg-none md:border-none md:h-auto md:gap-28 md:text-white md:w-auto ${
          stat ? "block" : "hidden"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end md:hidden">
          <button id="close" onClick={handleCloseClick}>
            {/* Emma, i struggled to give this close button the linear gradient border it deserves. Please help me out */}
            <img src={close} className="w-5 rounded-full" alt="Close Button" />
          </button>
        </div>

        {/* Links */}
        <ul className="pl-4 space-y-4 md:space-y-0 md:flex md:gap-x-10 md:items-center md:pl-0">
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white font-inter md:text-base"
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white font-inter md:text-base"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white font-inter md:text-base"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white font-inter md:text-base"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Register button */}
        <div className="pl-4">
          <button className="text-white font-mont bg-gradient-to-r custom-gradient p-3 px-6 rounded-[0.25rem] md:p-2.5 md:px-4">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nav;
<></>;
