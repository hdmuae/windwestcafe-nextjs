import * as React from "react";
import Map from "./map";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="bg-primary py-32">
      <h1 className="text-center text-title text-white mb-8">Contact Us</h1>
      <div className="max-w-default lg:w-4/5 m-auto flex-col flex lg:flex-row">
        <div id="map" className="w-4/5 lg:w-2/5 h-full m-auto">
          <Map />
        </div>
        <div className="w-4/5 lg:w-2/5 m-auto mt-6">
          <div className="mb-4">
            <p className="mb-1 text-white">Name</p>
            <input
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white text-opacity-50 placeholder:text-white placeholder:opacity-50"
              placeholder="John Doe"
            />
          </div>

          <div className="w-full mb-4">
            <p className="mb-1 text-white">E-mail</p>
            <input
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white text-opacity-50 placeholder:text-white placeholder:opacity-50"
              placeholder="johndoe@mail.com"
            />
          </div>

          <div className="w-full mb-4">
            <p className="mb-1 text-white">Number</p>
            <input
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white text-opacity-50 placeholder:text-white placeholder:opacity-50"
              placeholder="+123 4 567 890"
            />
          </div>

          <div className="w-full mb-4">
            <p className="mb-1 text-white">Your message</p>
            <textarea
              rows={6}
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white text-opacity-50 placeholder:text-white placeholder:opacity-50"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-white text-primary font-bold rounded py-1 px-6">
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
