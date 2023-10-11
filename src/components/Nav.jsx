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
    <section className="relative">
      <nav className="flex items-center justify-between p-6 ">
        {/* Logo */}
        <div id="left" className="text-lg font-bold text-white font-clash">
          get<span className="text-[#D434FE]">linked</span>
        </div>

        {/* Burger Icon */}
        <div id="right">
          <button onClick={handleOpenClick}>
            <img src={burger} className="cursor-pointer" alt="Burger Icon" />
          </button>
        </div>
      </nav>

      {/* Nav PopUp (Mobile Screen) */}

      {/* Emma, i tried hard to add add transition to this nav popup to no avail, so please help out */}
      <div
        id="popup"
        className={`bg-[#150E28] absolute w-[90%] h-[25rem] background-filter border-solid border-[0.5px] border-[rgba(255, 255, 255, 0.04)] left-1/2 top-56 -translate-x-1/2 -translate-y-1/2 p-4 space-y-10 transition-all ease-in delay-100 ${
          stat ? "block" : "hidden"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button id="close" onClick={handleCloseClick}>
            {/* Emma, i struggled to give this close button the linear gradient border it deserves. Please help me out */}
            <img src={close} className="w-5 rounded-full" alt="Close Button" />
          </button>
        </div>

        {/* Links */}
        <ul className="pl-4 space-y-4">
          <li>
            <a href="#" className="text-lg font-medium text-white font-inter">
              Timeline
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-white font-inter">
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-white font-inter">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-white font-inter">
              Contact
            </a>
          </li>
        </ul>

        {/* Register button */}
        <div className="pl-4">
          <button className="text-white font-mont bg-gradient-to-r custom-gradient p-3 px-6 rounded-[0.25rem]">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nav;
<></>;
