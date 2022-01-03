import * as React from "react";
import Map from "./map";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-lightbrown py-12">
      <h1 className="text-center text-4xl text-primary font-berlin mb-8">
        Contact Us
      </h1>
      <div className="max-w-default m-auto flex">
        <div className="w-1/2 my-4">
          <Map />
        </div>
        <div className="w-1/2 flex">
          <div className="w-full">
            <div className="mb-4">
              <p className="mb-1 font-berlin text-primary">Name</p>
              <input
                className="w-10/12 bg-contact border border-contact rounded-xl p-3 outline-none placeholder:text-primary placeholder:opacity-40"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <p className="mb-1 font-berlin text-primary">E-mail</p>
              <input
                className="w-10/12 bg-contact border border-contact rounded-xl p-3 outline-none placeholder:text-primary placeholder:opacity-40"
                placeholder="johndoe@mail.com"
              />
            </div>

            <div className="mb-4">
              <p className="mb-1 font-berlin text-primary">Number</p>
              <input
                className="w-10/12 bg-contact border border-contact rounded-xl p-3 outline-none placeholder:text-primary placeholder:opacity-40"
                placeholder="+123 4 567 890"
              />
            </div>

            <div className="mb-4">
              <p className="mb-1 font-berlin text-primary">Your message</p>
              <textarea
                rows={4}
                className="w-10/12 bg-contact border border-contact rounded-xl p-3 outline-none placeholder:text-primary placeholder:opacity-40"
                placeholder="Enter your message"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
