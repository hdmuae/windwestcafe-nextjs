import * as React from "react";
import Navbar from "../../components/Navbar";
import Facebook from "../../../public/svg/Facebook-white.svg";
import Instagram from "../../../public/svg/Instagram-white.svg";
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
      // @ts-ignore
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
            Welcome to the Wind West Cafe!
          </h1>

          <p className="font-light text-center text-white mb-4">
            The west wind has brought real inspiration from those lands where
            the long-lasting coffee culture soars, saturated with history,
            heritage and inspiration. From where it all began and what we want
            to convey to the city dwellers.
          </p>

          <p
            className={`font-light text-center text-white mb-4 transition-all duration-500 ${
              visibility ? "" : "lg:block hidden"
            }`}
          >
            We have created a clear space for your imagination and inspiration
            in pure minimalistic design, with secret details that distinguish
            our brand. Our coffee made the astonishing trip to satisfy you and
            make your life better because you are worthy to drink the delicious
            coffee. We chose first-class quality coffee beans — Dersut,
            originally from the picturesque city of Conegliano, Treviso, Italy.
            Many varieties are even Espresso Italiano certified and have won at
            least one Gold Medal at the International Coffee Tasting, Dersut
            also became a member of SCA (Speciality Coffee Association), a world
            association that promotes quality coffee culture and specialty
            coffees. We are the first coffee shop in Dubai where you can try
            Dersut espresso and other traditional Italian coffee drinks in
            company with your favorite desserts and handmade chocolate. Moreover
            we are official distributor of Dersut in UAE, the selection of
            products you can find in our Shop.
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
