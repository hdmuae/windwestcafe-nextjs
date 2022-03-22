import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{ dark: boolean }> = ({ dark }) => {
  console.log(dark);
  return (
    <footer className={`${dark ? "bg-footer" : "bg-black bg-opacity-60"} `}>
      <div className="m-auto w-4/5 py-12">
        <div className="m-auto flex max-w-default flex-col items-center justify-between font-nexa text-white lg:flex-row lg:items-start">
          <Link href="/#welcome">
            <a className="pb-8 lg:pb-0">
              <Image
                width="160"
                height="140"
                src="/images/vertical_logo.png"
                alt="Wind West Cafe Logo"
              />
            </a>
          </Link>

          {/* Column 1 */}
          <div className="flex flex-col">
            <h1 className="mb-3 text-lg font-bold">Know Wind West Cafe</h1>
            <Link href="/#">
              <a className="pb-2 text-center hover:font-bold lg:text-left">
                About Us
              </a>
            </Link>

            <Link href="/#menu">
              <a className="pb-2 text-center hover:font-bold lg:text-left">
                Our Menu
              </a>
            </Link>

            <Link href="/#shop">
              <a className="text-center hover:font-bold lg:text-left">
                Shop Dersut
              </a>
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col pt-8 lg:pt-0">
            <h1 className="mb-3 text-center text-lg font-bold lg:text-left">
              More Information
            </h1>
            <Link href="">
              <a className="pb-2 text-center hover:font-bold lg:text-left">
                Careers
              </a>
            </Link>

            <Link href="/termsandconditions" passHref>
              <a className="text-center hover:font-bold lg:text-left">
                Terms and Conditions
              </a>
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col pt-8 lg:pt-0">
            <h1 className="mb-3 text-center text-lg font-bold lg:text-left">
              Contact Information
            </h1>
            <a
              href="tel:+123 4 567 890"
              className="pb-2 text-center hover:font-bold lg:text-left"
            >
              +123 4 567 890
            </a>
            <a
              href="tel:+123 4 567 890"
              className="pb-2 text-center hover:font-bold lg:text-left"
            >
              +123 4 567 890
            </a>
            <a
              href="mailto:info@mail.com"
              className="pb-2 text-center hover:font-bold lg:text-left"
            >
              info@mail.com
            </a>
            <p className="text-center hover:font-bold lg:text-left">
              Address - Dubai - UAE
            </p>
          </div>

          {/* Column 4 */}
          <div className="pt-8 lg:pt-0">
            <h1 className="mb-3 text-center text-lg  font-bold lg:text-left">
              Social Media
            </h1>
            <div className="hidden justify-between lg:flex">
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

            <div className="flex flex-col justify-between lg:hidden">
              <a className="pb-2 text-center hover:font-bold lg:text-left">
                Facebook
              </a>
              <a className="pb-2 text-center hover:font-bold lg:text-left">
                Twitter
              </a>
              <a className="pb-2 text-center hover:font-bold lg:text-left">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
