"use client";
import React, { useState } from "react";
import { InputBoxDesign } from "./InputBox/InputBoxDesign";
import { toast } from "react-toastify";
import ToastComponent from "./ToastComp";
const initialValue = {
  city: "",
  email: "",
  phone: "",
  name: "",
  bussinessName: "",
};
const ContactForm = () => {
  const [details, setDetail] = useState(initialValue);
  const handleChange = (e) => {
    setDetail({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    const signal = controller.signal;
    const res = await fetch("https://letzstepinbackendserver.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
      signal,
    });

    if (!res.ok) {
      const toastId = toast.info(``);
      setTimeout(() => {
        toast.update(toastId, {
          render: () => <ToastComponent type={"error"} />,
          className: "svghide",
          autoClose: 1050,
          isLoading: false,
          type: toast.TYPE.ERROR,
        });
      }, 0);
    } else {
      const toastId = toast.info(``);
      setTimeout(() => {
        toast.update(toastId, {
          render: () => <ToastComponent type={"success"} />,
          className: "svghide",
          autoClose: 1050,
          isLoading: false,
          type: toast.TYPE.SUCCESS,
        });
        setDetail(initialValue);
      }, 0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 ">
        <InputBoxDesign
          type="text"
          placeholderClass={"text-[#e9e9ea94] p-2 font-medium "}
          name="name"
          id={"form-name"}
          onChange={handleChange}
          value={details.name}
          placeholder="Your Name "
          required={true}
          className="py-3  outline-none px-4 rounded-lg border border-[#e9e9ea94]  w-full bg-[black] "
        />
      </div>{" "}
      <div className="flex w-full">
        <div className="p-4 flex-1">
          <InputBoxDesign
            type="text"
            placeholderClass={"text-[#e9e9ea94] p-2 font-medium "}
            name="city"
            id={"form-city"}
            onChange={handleChange}
            value={details.city}
            placeholder="City "
            required={true}
            className="py-3  outline-none px-4 rounded-lg border border-[#e9e9ea94]  w-full bg-[black] "
          />
        </div>
        <div className="p-4 flex-1">
          <InputBoxDesign
            type="tel"
            placeholderClass={"text-[#e9e9ea94] p-2 font-medium "}
            name="phone"
            id={"form-phone"}
            onChange={handleChange}
            value={details.phone}
            placeholder="Phone "
            required={true}
            className="py-3  outline-none px-4 rounded-lg border border-[#e9e9ea94]  w-full bg-[black] "
          />
        </div>
      </div>
      <div className="p-4 ">
        <InputBoxDesign
          type="text"
          placeholderClass={"text-[#e9e9ea94] p-2 font-medium "}
          name="bussinessName"
          id={"form-BussinessName"}
          onChange={handleChange}
          value={details.bussinessName}
          placeholder="Bussiness Name "
          required={true}
          className="py-3  outline-none px-4 rounded-lg border border-[#e9e9ea94]  w-full bg-[black] "
        />
      </div>
      <div className="p-4 ">
        <InputBoxDesign
          type="email"
          placeholderClass={"text-[#e9e9ea94] p-2 font-medium "}
          name="email"
          id={"form-email"}
          onChange={handleChange}
          value={details.email}
          placeholder="Email "
          required={true}
          className="py-3  outline-none px-4 rounded-lg border border-[#e9e9ea94]  w-full bg-[black] "
        />
      </div>{" "}
      <button
        type="submit"
        className="my-6 py-3  px-6 bg-white text-black rounded-3xl mx-4"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
