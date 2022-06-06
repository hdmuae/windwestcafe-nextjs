import * as React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "../../components/Footer";

export const ContactUs: React.FC = () => {
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
    <section
      id="contact"
      className="bg-[url('/images/mobile/background_contact.png')] bg-cover pt-32 lg:bg-[url('/images/background_contact.png')]"
    >
      <div className="m-auto  w-11/12 max-w-default lg:w-4/5">
        <h1 className="mb-12 font-minion text-5xl font-bold text-white lg:text-title">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto mt-6 lg:m-0 lg:w-4/5 w-full"
        >
          <div className="mb-4">
            <input
              {...register("name")}
              className="w-full rounded-xl border bg-transparent p-4 font-nexa text-white outline-none placeholder:text-white"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4 w-full">
            <input
              {...register("email")}
              className="w-full rounded-xl border bg-transparent p-4 font-nexa text-white outline-none placeholder:text-white"
              placeholder="Your email"
            />
          </div>

          <div className="mb-4 w-full">
            <input
              {...register("number")}
              className="w-full rounded-xl border bg-transparent p-4 font-nexa text-white outline-none placeholder:text-white"
              placeholder="Your number"
            />
          </div>

          <div className="mb-4 w-full">
            <textarea
              rows={6}
              {...register("message")}
              className="w-full rounded-xl border bg-transparent p-3 font-nexa text-white outline-none placeholder:text-white"
              placeholder="Your message"
            />
          </div>

          <button className="mb-12 w-full rounded-xl bg-primary p-3 font-nexa text-lg font-bold text-white">
            Submit
          </button>
        </form>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.044705348557!2d55.17650021448789!3d25.100347983941347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ba659a5ad91%3A0x279d1db038a4a880!2sWind%20West%20Home!5e0!3m2!1sen!2sen!4v1654478061047!5m2!1sen!2sen"
              width="600" height="450" style={{border:0}} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <ToastContainer />
      </div>

      <div className="hidden lg:block">
        <Footer dark={false} />
      </div>
    </section>
  );
};

export default ContactUs;
