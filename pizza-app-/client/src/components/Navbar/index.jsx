import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPizzaSlice, FaTruckMoving, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Index = () => {
  const [menu, setMenu] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <div className="w-full h-24 fixed z-50 bg-gradient-to-b from-red-800 to-red-600 flex items-center px-5 shadow-xl sm:h-20 sm:px-2">
      <div
        className="w-full flex
    justify-between items-center ml-24 mr-16 md:mx-8"
      >
        <h1 className="text-4xl left-0 text-yellow-400 text-center leading-7 sm:text-2xl">
          PIZZA <br />{" "}
          <span className="text-lg border-t-2 sm:text-base">APP LOGO</span>
        </h1>
        <div
          className={`w-full pl-8 flex justify-between items-center md:flex-col md:items-start md:gap-5 md:absolute md:left-0 ${
            menu ? "top-24 sm:top-20 md:opacity-100" : "-top-56 md:opacity-0"
          } md:p-8 z-50 md:bg-gradient-to-b from-red-800 to-red-600 sm:px-8 sm:py-6 sm:gap-4 transition-all duration-300 ease-out`}
        >
          <Link
            to="/"
            className={`text-white text-center py-3 px-6  md:flex md:gap-5 md:p-2 md:items-center  hover:bg-red-800 
            ${path === "/" && "bg-red-900"}
            transition-all ease-in duration-200`}
          >
            <FaPizzaSlice className="text-4xl mx-auto sm:text-3xl" />
            <p className="text-2xl text-center sm:text-xl">GET PIZZA</p>
          </Link>
          <Link
            to="/my-orders"
            className={`text-white text-center py-3 px-5 md:flex md:gap-5 md:p-2 md:items-center hover:bg-red-800 
            ${path === "/my-orders" && "bg-red-900"}
            transition-all ease-in duration-200`}
          >
            <FaTruckMoving className="text-4xl mx-auto sm:text-3xl" />
            <p className="text-2xl text-center sm:text-xl">MY ORDERS</p>
          </Link>
          <Link
            to="/sign-in"
            className={`h-16 text-white flex items-center border-2 px-5 py-2 rounded-full text-center ml-auto mr-5 md:mr-10 md:ml-0 hover:bg-red-800 
            ${path === "/sign-in" && "bg-red-900"}
            transition-all ease-in duration-200`}
          >
            <AiOutlineUser className="text-4xl mx-auto sm:text-2xl" />
            Order
          </Link>
        </div>
        <button
          className="hidden md:h-10 md:w-10 right-0 md:flex"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <FaTimes className="w-full h-full text-slate-50" />
          ) : (
            <FaBars className="w-10 h-full text-5xl text-slate-50" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Index;
