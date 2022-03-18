import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-60">
      <div className="m-auto hidden w-4/5 py-12 lg:block">
        <div className="m-auto flex max-w-default justify-between font-nexa text-white">
          <Link href="/#welcome">
            <a>
              <Image
                width="160"
                height="140"
                src="/images/vertical_logo.png"
                alt="Wind West Cafe Logo"
              />
            </a>
          </Link>

          <div className="flex flex-col">
            <h1 className="mb-3 text-lg font-bold">Know Wind West Cafe</h1>
            <Link href="/#">
              <a className="pb-2 hover:font-bold">About Us</a>
            </Link>

            <Link href="/#menu">
              <a className="pb-2 hover:font-bold">Our Menu</a>
            </Link>

            <Link href="/#shop">
              <a className="hover:font-bold">Shop Dersut</a>
            </Link>
          </div>

          <div className="flex flex-col">
            <h1 className="mb-3 text-lg font-bold">More Information</h1>
            <Link href="">
              <a className="pb-2 hover:font-bold">Careers</a>
            </Link>

            <Link href="/termsandconditions" passHref>
              <a className="hover:font-bold">Terms and Conditions</a>
            </Link>
          </div>

          <div className="flex flex-col">
            <h1 className="mb-3 text-lg font-bold">Contact Information</h1>
            <a href="tel:+123 4 567 890" className="pb-2 hover:font-bold">
              +123 4 567 890
            </a>
            <a href="tel:+123 4 567 890" className="pb-2 hover:font-bold">
              +123 4 567 890
            </a>
            <a href="mailto:info@mail.com" className="pb-2 hover:font-bold">
              info@mail.com
            </a>
            <p className="hover:font-bold">Address - Dubai - UAE</p>
          </div>

          <div>
            <h1 className="mb-3 text-lg font-bold">Social Media</h1>
            <div className="flex justify-between">
              <Image
                className="cursor-pointer"
                width="15"
                height="15"
                src="/svg/Facebook-white.svg"
                alt="Facebook icon"
              />

              <Image
                width="15"
                height="15"
                className="cursor-pointer"
                src="/svg/Instagram-white.svg"
                alt="Instagram icon"
              />
              <Image
                width="20"
                height="20"
                className="cursor-pointer"
                src="/svg/Tripadvisor-white.svg"
                alt="Tripadvisor icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-white lg:hidden">
        <Link href="/#welcome">
          <a>
            <Image
              src="/images/vertical_logo.png"
              width="200px"
              height="160px"
              alt="Wind West Cafe Logo"
            />
          </a>
        </Link>

        <div className="mb-6 flex w-full flex-col justify-around md:flex-row">
          <div className="m-auto mb-8 flex flex-col text-center">
            <h3 className="mb-3 font-nexa text-lg">Know Wind West Cafe</h3>
            <Link href="/#about">
              <a className="pb-2 font-nexa">About Us</a>
            </Link>

            <Link href="/#menu">
              <a className="pb-2 font-nexa">Our Menu</a>
            </Link>

            <Link href="/#shop">
              <a className="pb-2 font-nexa">Shop Dersut</a>
            </Link>

            <Link href="">
              <a className="pb-2 font-nexa">Careers</a>
            </Link>

            <Link href="/termsandconditions">
              <a className="font-nexa">Terms and Conditions</a>
            </Link>
          </div>

          <div className="m-auto flex flex-col text-center">
            <h3 className="mb-3 font-nexa text-lg">Contact Information</h3>
            <p className="pb-2 font-nexa">+123 4 567 890</p>
            <p className="pb-2 font-nexa">+123 4 567 890</p>
            <p className="pb-2 font-nexa">info@mail.com</p>
            <p className="pb-2 font-nexa">Address - Street Name</p>
            <p className="font-nexa">Dubai - UAE</p>
          </div>
        </div>

        <div className="flex w-1/4 justify-between pb-4">
          <a>
            <Image
              width="15"
              height="15"
              className="cursor-pointer"
              src="/svg/Facebook-white.svg"
              alt="Facebook icon"
            />
          </a>
          <a>
            <Image
              width="15"
              height="15"
              className="cursor-pointer"
              src="/svg/Instagram-white.svg"
              alt="Instagram icon"
            />
          </a>
          <a>
            <Image
              width="15"
              height="15"
              className="cursor-pointer"
              src="/svg/Tripadvisor-white.svg"
              alt="Tripadvisor icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
