import * as React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import Facebook from "../../../public/images/Facebook.svg";
import Instagram from "../../../public/images/Instagram.svg";

const Nav: React.FC = () => {
  const [lang, setLang] = React.useState(true);
  return (
    <nav className="max-w-default m-auto flex justify-between pt-8">
      <Image src={Logo} alt="Wind West Cafe Logo" />
      <div className="w-1/2 flex justify-between items-center text-white font-nexa">
        <a className="hover:border-b-2" href="#">
          ABOUT US
        </a>
        <a className="hover:border-b-2" href="#">
          OUR MENU
        </a>
        <a className="hover:border-b-2" href="#">
          SHOP DERSUT
        </a>
        <a className="hover:border-b-2" href="#">
          GALLERY
        </a>
        <a className="hover:border-b-2" href="#">
          CONTACT
        </a>
      </div>

      <div className="w-1/12 flex justify-between items-center text-white font-nexa">
        <button onClick={() => setLang(!lang)}>
          {lang ? "ENGLISH" : "ARABIC"}
        </button>
        <Image src={Facebook} alt="Wind West Cafe Facebook Page" />
        <Image src={Instagram} alt="Wind West Cafe Instagram Page" />
      </div>
    </nav>
  );
};

export default Nav;
