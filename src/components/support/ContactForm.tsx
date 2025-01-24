"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full md:w-[630px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-primaryText text-sm font-normal md:font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John"
                className=" w-full bg-secondaryBackground  rounded-[4px] p-2 focus:ring-black focus:ring-1 "
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-primaryText text-sm font-normal md:font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className=" w-full bg-secondaryBackground  rounded-[4px] p-2 focus:ring-black focus:ring-1 "
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-primaryText text-sm font-normal md:font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message.



"
              className=" w-full bg-secondaryBackground  rounded-[4px] p-2 focus:ring-black focus:ring-1 "
              rows={5}
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className=" w-full bg-[#00B073] text-white rounded-lg px-6 py-2 hover:bg-[#27a277] transition-colors"
          >
            Get Help
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
