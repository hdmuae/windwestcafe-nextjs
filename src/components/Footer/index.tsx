import * as React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-4/5 m-auto py-12 lg:block hidden">
        <div className="max-w-default m-auto flex justify-between text-primary">
          <div>
            <Image
              src="/svg/bluelogo.svg"
              width="150px"
              height="150px"
              alt="Wind West Cafe Logo"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-3">Know Wind West Cafe</h1>
            <a href="#about" className="hover:font-bold pb-2">
              About Us
            </a>
            <a href="#menu" className="hover:font-bold pb-2">
              Our Menu
            </a>
            <a href="#shop" className="hover:font-bold">
              Shop Dersut
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-3">More Information</h1>
            <a href="#contact" className="hover:font-bold pb-2">
              Contact
            </a>
            <a href="#" className="hover:font-bold">
              Terms and Conditions
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-3">Contact Information</h1>
            <p className="hover:font-bold pb-2">+123 4 567 890</p>
            <p className="hover:font-bold pb-2">+123 4 567 890</p>
            <p className="hover:font-bold pb-2">info@mail.com</p>
            <p className="hover:font-bold">Address - Dubai - UAE</p>
          </div>

          <div>
            <h1 className="text-lg font-bold mb-3">Social Media</h1>
            <div className="flex justify-between">
              <Image
                className="cursor-pointer"
                width="15"
                height="15"
                src="/svg/Facebook.svg"
                alt="Facebook icon"
              />
              <Image
                width="15"
                height="15"
                className="cursor-pointer"
                src="/svg/Twitter.svg"
                alt="Twitter icon"
              />
              <Image
                width="15"
                height="15"
                className="cursor-pointer"
                src="/svg/Instagram.svg"
                alt="Instagram icon"
              />
              <Image
                width="18"
                height="18"
                className="cursor-pointer"
                src="/svg/Tripadvisor.svg"
                alt="Tripadvisor icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:hidden my-6 text-primary">
        <div>
          <Image
            src="/svg/logo-horizontal.svg"
            width="200px"
            height="120px"
            alt="Wind West Cafe Logo"
          />
        </div>

        <div className="w-full flex justify-around mb-6">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-3">Know Wind West Cafe</h3>
            <a href="#about" className="hover:font-bold pb-2">
              About Us
            </a>
            <a href="#menu" className="hover:font-bold pb-2">
              Our Menu
            </a>
            <a href="#shop" className="hover:font-bold pb-2">
              Shop Dersut
            </a>
            <a href="#contact" className="hover:font-bold pb-2">
              Contact
            </a>
            <a href="#" className="hover:font-bold">
              Terms and Conditions
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-3">Contact Information</h3>
            <p className="hover:font-bold pb-2">+123 4 567 890</p>
            <p className="hover:font-bold pb-2">+123 4 567 890</p>
            <p className="hover:font-bold pb-2">info@mail.com</p>
            <p className="hover:font-bold pb-2">Address - Street Name</p>
            <p className="hover:font-bold">Dubai - UAE</p>
          </div>
        </div>

        <div className="w-1/2 flex justify-between">
          <Image
            className="cursor-pointer"
            width="15"
            height="15"
            src="/svg/Facebook.svg"
            alt="Facebook icon"
          />
          <Image
            width="20"
            height="20"
            className="cursor-pointer"
            src="/svg/Twitter.svg"
            alt="Twitter icon"
          />
          <Image
            width="18"
            height="18"
            className="cursor-pointer"
            src="/svg/Instagram.svg"
            alt="Instagram icon"
          />
          <Image
            width="20"
            height="20"
            className="cursor-pointer"
            src="/svg/Tripadvisor.svg"
            alt="Tripadvisor icon"
          />
        </div>
      </div>

      <div className="bg-primary">
        <p className="text-base text-center text-white py-4">
          © 2022 Wind West Cafe. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
