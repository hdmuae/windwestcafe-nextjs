import * as React from "react";
import Image from "next/image";
import Logo from "../../../public/svg/Logo.svg";
import Facebook from "../../../public/svg/Facebook-white.svg";
import Instagram from "../../../public/svg/Instagram-white.svg";
import Menu from "../../../public/svg/menu-icon.svg";
import Close from "../../../public/svg/close.svg";

interface myProps {
  fixed: boolean;
  menu: boolean;
  setMenu: (x: boolean) => void;
}

const Nav: React.FC<myProps> = ({ fixed, menu, setMenu }) => {
  return (
    <nav
      className={`fixed w-full left-0 right-0 py-5 z-50 transition-colors duration-200 ${
        fixed ? "" : "bg-primary"
      }`}
    >
      <div
        id="navbar"
        className="ground:w-4/5 xl:max-w-default flex justify-between items-center xl:m-auto lg:mx-12 ground:mx-auto"
      >
        <div className="w-7/12 lg:w-1/4">
          <Image src={Logo} alt="Wind West Cafe Logo" />
        </div>

        <div className={`w-4/5 xl:w-1/2 justify-center ml-16 lg:block hidden`}>
          <div
            className={`w-full flex justify-between items-center text-white`}
          >
            <a className="text-lg xl:text-xl hover:border-b-2" href="#">
              About Us
            </a>
            <a className="text-lg xl:text-xl hover:border-b-2" href="#menu">
              Our Menu
            </a>
            <a className="text-lg xl:text-xl hover:border-b-2" href="#shop">
              Shop Dersut
            </a>
            <a className="text-lg xl:text-xl hover:border-b-2" href="#gallery">
              Gallery
            </a>
            <a className="text-lg xl:text-xl hover:border-b-2" href="#contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="w-1/4 flex items-center justify-end text-white ">
          {!menu && (
            <div onClick={() => setMenu(!menu)} className="lg:hidden">
              <Image src={Menu} alt="Burger menu icon" />
            </div>
          )}

          {menu && (
            <div onClick={() => setMenu(!menu)} className="lg:hidden">
              <Image src={Close} alt="Close burger menu icon" />
            </div>
          )}

          <a className="lg:block hidden mr-8" href="#">
            <Image src={Facebook} alt="Wind West Cafe Facebook Page" />
          </a>
          <a className="lg:block hidden" href="#">
            <Image src={Instagram} alt="Wind West Cafe Instagram Page" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
