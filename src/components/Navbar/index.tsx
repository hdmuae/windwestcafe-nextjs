import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface myProps {
  bg: boolean;
  fixed: boolean;
  menu?: boolean;
  setMenu?: (x: boolean) => void;
}

const Nav: React.FC<myProps> = ({ fixed, bg, menu, setMenu }) => {
  return (
    <nav
      className={`left-0 right-0 z-50 w-full py-5 transition-colors duration-200 ${
        fixed ? "fixed" : "bg-black bg-opacity-60"
      } ${bg ? "" : "bg-black bg-opacity-60"}`}
    >
      <div
        id="navbar"
        className="flex max-w-default items-center justify-between lg:mx-12 ground:mx-auto ground:w-4/5"
      >
        <Link href="/#welcome">
          <a className="w-7/12 lg:w-1/4">
            <Image
              width="160"
              height="60"
              src="/svg/Logo.svg"
              alt="Wind West Cafe Logo"
            />
          </a>
        </Link>

        <div className={`ml-16 hidden w-4/5 justify-center lg:block xl:w-1/2`}>
          <div
            className={`flex w-full items-center justify-between text-white`}
          >
            <Link href="/#about">
              <a className="font-nexa hover:border-b-2">About Us</a>
            </Link>

            <Link href="/#menu">
              <a className="font-nexa hover:border-b-2" href="#menu">
                Our Menu
              </a>
            </Link>

            <Link href="/#shop">
              <a className="font-nexa hover:border-b-2" href="#shop">
                Shop Dersut
              </a>
            </Link>

            <Link href="/#gallery">
              <a className="font-nexa hover:border-b-2" href="#gallery">
                Gallery
              </a>
            </Link>

            <Link href="/#contact">
              <a className="font-nexa hover:border-b-2" href="#contact">
                Contact Us
              </a>
            </Link>
          </div>
        </div>

        <div className="flex w-1/4 items-center justify-end text-white">
          {!menu && (
              <div onClick={() => setMenu!(!menu)} className="lg:hidden">
                <Image
                    width="15"
                    height="15"
                    src="/svg/menu-icon.svg"
                    alt="Burger menu icon"
                />
              </div>
          )}
          {menu && (
              <div onClick={() => setMenu!(!menu)} className="lg:hidden">
                <Image
                    src="/svg/close.svg"
                    width="15"
                    height="15"
                    alt="Close burger menu icon"
                />
              </div>
          )}
          {/*{!menu && (}
            {/*<div onClick={() => setMenu!(!menu)} className="lg:hidden">*/}
              {/*<Image*/}
                {/*width="15"*/}
                {/*height="15"*/}
                {/*src="/svg/menu-icon.svg"*/}
                {/*alt="Burger menu icon"*/}
              {/*/>*/}
            {/*</div>*/}
          {/*)}*/}

          {/*{menu && (*/}
            {/*<div onClick={() => setMenu!(!menu)} className="lg:hidden">*/}
              {/*<Image*/}
                {/*src="/svg/close.svg"*/}
                {/*width="15"*/}
                {/*height="15"*/}
                {/*alt="Close burger menu icon"*/}
              {/*/>*/}
            {/*</div>*/}
          {/*)}*/}

          <a className="mr-8 hidden lg:block" href="https://www.facebook.com/Wind-West-Cafe-106558092043333" target="_blank" rel="noreferrer">
            <Image
              width="15"
              height="15"
              src="/svg/Facebook-white.svg"
              alt="Wind West Cafe Facebook Page"
            />
          </a>

          <a className="mr-8 hidden lg:block" href="https://www.instagram.com/windwestcafe/" target="_blank" rel="noreferrer">
            <Image
              width="15"
              height="15"
              src="/svg/Instagram-white.svg"
              alt="Wind West Cafe Instagram Page"
            />
          </a>

          <a className="hidden lg:block" href="#">
            <Image
              width="15"
              height="15"
              src="/svg/Tripadvisor-white.svg"
              alt="Wind West Cafe Tripadvisor Page"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
