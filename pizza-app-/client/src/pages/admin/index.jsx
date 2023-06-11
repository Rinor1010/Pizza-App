import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Index = ({ setSession, setToken, ADMIN }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      password: password,
    };
    axios.post(`http://localhost:4000/sign-in/admin`, user).then((response) => {
      if (response.data.auth) {
        setToken(response.data.accessToken);
        setSession(true);
        navigate("/dashboard");
      } else {
        setToken("");
        setSession(false);
        setError(true);
      }
    });
  };

  return (
    <div className="pt-32 sm:pt-48 flex justify-center items-center px-10">
      <form
        className="w-96 flex flex-col gap-2 items-center relative top-14 px-8 py-6 md:top-12 z-0 bg-slate-200 shadow-md rounded-xl border border-slate-400"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold pb-4">Admin Sign In</h1>
        {error && (
          <h1 className="text-xl font-semibold text-red-500 pb-4">
            Wrong Credentials!
          </h1>
        )}
        <div className="relative mb-4 w-full group">
          <input
            type="text"
            name="floating_email"
            className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            <FaUserAlt /> Full Name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="flex items-center gap-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            <FaLock /> Password
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
        >
          SUBMIT
        </button>
        <Link to="/sign-in" className="text-blue-500 pt-4 text-base">
          Sign Up As User
        </Link>
      </form>
    </div>
  );
};

export default Index;
