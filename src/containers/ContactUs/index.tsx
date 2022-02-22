import * as React from "react";
import Map from "./map";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactUs: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast.success("Message sent successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data: any) => {
    const { name, email, number, message } = data;

    try {
      const templateParams = {
        name,
        email,
        number,
        message,
      };
      await emailjs.send(
        "service_m9x0oik",
        "template_z3zmvkb",
        templateParams,
        "user_bDIEmwy6qfjsQW9OkuxdP"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section id="contact" className="bg-primary py-32">
      <h1 className="text-center text-title text-white mb-8">Contact Us</h1>
      <div className="max-w-default lg:w-4/5 m-auto flex-col flex lg:flex-row">
        <div id="map" className="w-4/5 lg:w-2/5 h-full m-auto">
          <Map />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 lg:w-2/5 m-auto mt-6"
        >
          <div className="mb-4">
            <p className="mb-1 text-white">Name</p>
            <input
              {...register("name")}
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white placeholder:text-white placeholder:opacity-50"
              placeholder="John Doe"
            />
          </div>

          <div className="w-full mb-4">
            <p className="mb-1 text-white">E-mail</p>
            <input
              {...register("email")}
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white placeholder:text-white placeholder:opacity-50"
              placeholder="johndoe@mail.com"
            />
          </div>

          <div className="w-full mb-4">
            <p className="mb-1 text-white">Number</p>
            <input
              {...register("number")}
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white placeholder:text-white placeholder:opacity-50"
              placeholder="+123 4 567 890"
            />
          </div>

          <div className="w-full mb-4">
            <p className="mb-1 text-white">Your message</p>
            <textarea
              rows={6}
              {...register("message")}
              className="w-full bg-white bg-opacity-20 rounded-xl p-3 outline-none text-white placeholder:text-white placeholder:opacity-50"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-white text-primary font-bold rounded py-1 px-6">
              SEND
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactUs;
