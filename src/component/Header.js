import React from "react";
import Logo from "../assets/port.png";

function Header() {
  return (
    <div id="home" className="section">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img className="w-16 h-16 sm:w-16 sm:h-16 md:w-24 md:h-24" src={Logo} alt="Logo" />
          </a>
          {/* button */}
          <button className="btn btn-sm text-lg sm:text-xl md:text-2xl lg:text-2xl  px-4 py-2 sm:px-6 sm:py-3">
            Work With Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
