import * as React from "react";
import Logo from "../../../public/images/Logovertical.svg";
import Facebook from "../../../public/images/Facebook.svg";
import Instagram from "../../../public/images/Instagram.svg";
import Twitter from "../../../public/images/Twitter.svg";
import Tripadvisor from "../../../public/images/Tripadvisor.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-darkbrown py-12">
        <div className="max-w-default  m-auto flex justify-between">
          <div>
            <Image src={Logo} alt="Wind West Cafe Logo" />
          </div>
          <div>
            <h3 className="text-white font-berlin mb-3">Know Wind West Cafe</h3>
            <p className="text-white">About Us</p>
            <p className="text-white">Our Menu</p>
            <p className="text-white">Shop Dersut</p>
          </div>

          <div>
            <h3 className="text-white font-berlin mb-3">More Information</h3>
            <p className="text-white">Contact</p>
            <p className="text-white">Terms and Conditions</p>
          </div>

          <div>
            <h3 className="text-white font-berlin mb-3">Contact Information</h3>
            <p className="text-white">+123 4 567 890</p>
            <p className="text-white">+123 4 567 890</p>
            <p className="text-white">info@mail.com</p>
            <p className="text-white">Address - Dubai - UAE</p>
          </div>

          <div>
            <h3 className="text-white font-berlin mb-3">Social Media</h3>
            <div className="flex justify-between">
              <Image src={Facebook} alt="Facebook icon" />
              <Image src={Twitter} alt="Twitter icon" />
              <Image src={Instagram} alt="Instagram icon" />
              <Image src={Tripadvisor} alt="Tripadvisor icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightbrown">
        <p className="text-center text-primary font-berlin py-4">
          © 2022 Wind West Cafe. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
