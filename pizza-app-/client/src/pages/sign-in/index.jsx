import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaUserAlt,
  FaHouseUser,
  FaPhone,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

const Index = ({ cart, POST }) => {
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const order = {
      name: name,
      phone: phone,
      address: address,
      cart: cart,
    };
    axios.post(`${POST}`, order);
    setUser(true);
  };

  const navigate = () => {
    window.location = "/";
  };

  return (
    <div className="pt-24 sm:pt-32 flex justify-center items-center px-10">
      {user ? (
        <div className="mt-44 flex flex-col gap-8 items-center">
          <h1 className="font-medium text-3xl text-center flex gap-6 px-4 items-center sm:gap-0">
            <FaCheckCircle className="w-10 h-10 text-green-400 animate-slit" />
            Your order was successful!{" "}
          </h1>
          <Link
            className="flex gap-4 items-center font-medium text-xl"
            onClick={navigate}
          >
            <FaArrowLeft className="text-red-600 h-8 w-8" />
            Go Back To Main Page
          </Link>
        </div>
      ) : (
        <form
          className="w-96 flex flex-col gap-2 items-center relative top-20 p-8 sm:top-16 z-0 bg-slate-200 shadow-md rounded-xl border border-slate-400"
          onSubmit={submitForm}
        >
          <h1 className="text-2xl font-bold pb-4">Order Now</h1>
          <div className="relative mb-4 w-full group">
            <input
              type="text"
              name="floating_email"
              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaUserAlt /> Full Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="address"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaHouseUser /> Address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label
              htmlFor="floating_email"
              className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <FaPhone /> Phone Number
            </label>
          </div>
          <div className="w-full flex gap-2 items-center justify-start">
            <input type="checkbox" name="check" id="" />
            <label htmlFor="check" className="text-slate-600">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 w-28 h-12 bg-slate-400 text-white font-semibold tracking-wide hover:bg-slate-500 transition-all ease-in duration-150 rounded-md"
            onClick={submitForm}
          >
            SUBMIT
          </button>
          <Link to="/sign-in/admin" className="text-blue-500 pt-4 text-base">
            Sign Up As Admin
          </Link>
        </form>
      )}
    </div>
  );
};

export default Index;
