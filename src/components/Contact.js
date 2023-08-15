import React from "react";
import { useState } from "react";
import profile from "../assets/c1.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="contact"
      className="contact-us  flex items-center md:px-12 lg:px-16 xl:px-32 py-16 pt-8 md:mx-40 mx-8 justify-center flex-col"
    >
       
      <h2
        className="text-2xl font-bold mb-4 text-white
      text-center"
      >
        Contact Me
      </h2>
      <div className="max-w-screen-xl mt-16 md:px-8 grid gap-12 grid-cols-1 md:grid-cols-2 flex flex-col m-[100px] justify-evenly overflow-y-hidden contact-container ">
      <div className="w-100 contact-left flex justify-center items-center  py-10 px-20">
        <img src={profile} className="max-w-full h-auto" alt="" />
      </div>
     
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sl font-medium">NAME:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border w-full  bg-gray-400 border-gray-300 rounded-lg p-2  mt-2  focus:outline-none focus:ring ring-sky-300 ring-offset-0"
          />
        </div>
        <div className="mt-8">
          <label className="block text-white text-sl font-medium mt-2 p-3">
            EMAIL:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border bg-gray-400 border-gray-300 rounded p-2 w-full mt-2 focus:outline-none focus:ring ring-sky-300 ring-offset-0"
          />
        </div>
        <div className="mt-8">
          <label className="block text-white text-sl font-medium py-2">
            MESSAGE:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border bg-gray-400 border-gray-300 rounded p-2 w-full mt-2 p-3 focus:outline-none focus:ring ring-sky-300 ring-offset-0"
          />
        </div>
        <div className="py-4">
          <button
            type="submit"
            className="uppercase py-3 text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:ring ring-sky-300 ring-offset-0 "
          >
            Submit
          </button>
        </div>
      </form>
      </div>

    </div>
  );
};

export default Contact;
