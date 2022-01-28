import * as React from "react";
import Navbar from "../../components/Navbar";
import Facebook from "../../../public/svg/Facebook-white.svg";
import Instagram from "../../../public/svg/Instagram-white.svg";
import Twitter from "../../../public/svg/Twitter-white.svg";
import Tripadvisor from "../../../public/svg/Tripadvisor-white.svg";
import Image from "next/image";

const styles: React.CSSProperties = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  width: "100%",
  objectFit: "cover",
  position: "absolute",
};

const Header: React.FC = () => {
  const [menu, setMenu] = React.useState(false);
  const [visibility, setVisibility] = React.useState(false);
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
      id="header"
      ref={containerRef}
      className={`"text-white h-screen -z-10 ${
        menu ? "bg-primary fade-in-out duration-700" : "bg-darkblue"
      }`}
    >
      <video
        className={`mx-auto ${menu ? "hidden" : "block"}`}
        style={styles}
        autoPlay
        loop
        muted
        id="header video"
      >
        <source src="/video/ocean.mp4" type="video/mp4" />
      </video>

      <Navbar fixed={isVisible} menu={menu} setMenu={setMenu} />

      <div className="max-w-default w-4/5 md:w-3/5 lg:w-1/2 h-full m-auto flex flex-col justify-around">
        <div className={`align-center z-20 ${menu ? "hidden" : ""}`}>
          <h1 className="font-medium text-center text-white lg:text-title text-3xl lg:mb-12 mb-4">
            About Us
          </h1>

          <p className="font-light text-center text-white mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>

          <p
            className={`font-light text-center text-white mb-4 transition-all duration-500 ${
              visibility ? "" : "lg:block hidden"
            }`}
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setVisibility(!visibility)}
              className="m-auto font-bold text-sm bg-white text-primary rounded p-2 block lg:hidden"
            >
              READ {visibility ? "LESS" : "MORE"}
            </button>
          </div>
        </div>

        <div
          className={`h-60 flex flex-col justify-around items-center text-white ${
            menu ? "" : "hidden items-center"
          }`}
        >
          <a className="text-xl hover:border-b-2 mb-2" href="#about">
            About Us
          </a>
          <a className="text-xl hover:border-b-2 mb-2" href="#menu">
            Our Menu
          </a>
          <a className="text-xl hover:border-b-2 mb-2" href="#shop">
            Shop Dersut
          </a>
          <a className="text-xl hover:border-b-2 mb-2" href="#gallery">
            Gallery
          </a>
          <a className="text-xl hover:border-b-2 mb-6" href="#contact">
            Contact Us
          </a>

          <div className="flex justify-between w-48">
            <Image
              className="cursor-pointer"
              src={Facebook}
              alt="Facebook icon"
            />
            <Image
              className="cursor-pointer"
              src={Twitter}
              alt="Twitter icon"
            />
            <Image
              className="cursor-pointer"
              src={Instagram}
              alt="Instagram icon"
            />
            <Image
              className="cursor-pointer"
              src={Tripadvisor}
              alt="Tripadvisor icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
