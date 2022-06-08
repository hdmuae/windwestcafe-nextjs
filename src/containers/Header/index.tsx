import * as React from "react";
import Navbar from "../../components/Navbar";
import Facebook from "../../../public/svg/Facebook-white.svg";
import Instagram from "../../../public/svg/Instagram-white.svg";
import Tripadvisor from "../../../public/svg/Tripadvisor-white.svg";
import Image from "next/image";

export const Header: React.FC = () => {
  const [menu, setMenu] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef();
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return (
    <section
      id="welcome"
      // @ts-ignore
      ref={containerRef}
      className={`"relative h-screen text-white ${
        menu ? "fade-in-out bg-primary duration-700" : "bg-darkblue"
      }`}
    >
      <video
        className={`mx-auto ${
          menu ? "hidden" : "block"
        } absolute top-0 left-0 right-0 bottom-0 h-full object-cover lg:h-auto`}
        autoPlay
        playsInline
        loop
        muted
        id="header video"
      >
        <source src="/video/ocean.mp4" type="video/mp4" />
      </video>

      <Navbar fixed={true} bg={isVisible} menu={menu} setMenu={setMenu} />

      <div className="m-auto flex h-full w-4/5 max-w-default flex-col justify-around md:w-3/5 lg:w-1/2">
        <div className={`align-center z-20 ${menu ? "hidden" : ""}`}>
          <h1 className="mb-4 text-center font-minion text-3xl font-medium text-white lg:mb-4 lg:text-2xl">
            Welcome to
          </h1>
          <h1 className="mb-4 text-center font-minion text-5xl font-bold text-white lg:mb-12 lg:text-7xl">
            Wind West Cafe!
          </h1>
          <div className="m-auto mt-20 flex w-1/2 justify-between lg:hidden">
            <a href="https://www.facebook.com/Wind-West-Cafe-106558092043333" target="_blank" rel="noreferrer">
            <Image
              className="cursor-pointer"
              width={32}
              height={32}
              src="/svg/fb.svg"
              alt="Facebook icon"
            />
            </a>
            <a href="https://www.instagram.com/windwestcafe/" target="_blank" rel="noreferrer">
            <Image
              className="cursor-pointer"
              width={32}
              height={32}
              src="/svg/inst.svg"
              alt="Instagram icon"
            />
            </a>
            <a href="https://www.tripadvisor.com/Restaurant_Review-g295424-d24102906-Reviews-Wind_West_Cafe-Dubai_Emirate_of_Dubai.html" target="_blank" rel="noreferrer">
            <Image
              className="cursor-pointer"
              width={32}
              height={32}
              src="/svg/ta.svg"
              alt="Tripadvisor icon"
            />
            </a>
          </div>
        </div>

        <div
          className={`flex h-60 flex-col items-center justify-around text-white ${
            menu ? "" : "hidden items-center"
          }`}
        >
          <a
            className="mb-2 font-minion text-2xl font-bold hover:border-b-2"
            href="#about"
          >
            About Us
          </a>
          <a
            className="mb-2 font-minion text-2xl font-bold hover:border-b-2"
            href="#menu"
          >
            Our Menu
          </a>
          <a
            className="mb-2 font-minion text-2xl font-bold hover:border-b-2"
            href="#shop"
          >
            Shop Dersut
          </a>
          <a
            className="mb-2 font-minion text-2xl font-bold hover:border-b-2"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="mb-6 font-minion text-2xl font-bold hover:border-b-2"
            href="#contact"
          >
            Contact Us
          </a>

          <div className="flex w-48 justify-between">
            <a href="https://www.facebook.com/Wind-West-Cafe-106558092043333" target="_blank" rel="noreferrer">
            <Image
              className="cursor-pointer"
              width={20}
              height={20}
              src="/svg/Facebook-white.svg"
              alt="Facebook icon"
            />
            </a>
            <a href="https://www.instagram.com/windwestcafe/" target="_blank" rel="noreferrer">
            <Image
              className="cursor-pointer"
              width={20}
              height={20}
              src="/svg/Instagram-white.svg"
              alt="Instagram icon"
            />
            </a>
            <a href="https://www.tripadvisor.com/Restaurant_Review-g295424-d24102906-Reviews-Wind_West_Cafe-Dubai_Emirate_of_Dubai.html" target="_blank" rel="noreferrer">
            <Image
              className="cursor-pointer"
              width={20}
              height={20}
              src="/svg/Tripadvisor-white.svg"
              alt="Tripadvisor icon"
            />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
