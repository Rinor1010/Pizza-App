import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../main/cards/Card";
import { FaArrowLeft, FaMoneyCheckAlt, FaTimesCircle } from "react-icons/fa";

const Index = ({ cart, addCart }) => {
  const [order, setOrder] = useState(false);

  return (
    <div className="w-full pt-24">
      <h1 className="text-black text-3xl font-bold text-center p-4 mt-8">
        Total Cost:{"  "}
        <span className="text-green-500 underline  underline-offset-4">
          {" "}
          {cart.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
          )}{" "}
          €{" "}
        </span>
      </h1>
      <div className="w-full flex justify-between px-12 sm:px-6">
        <div className="flex flex-wrap gap-12 justify-center p-5 w-full overflow-y-auto">
          {cart.map((pizza) => (
            <Card
              name={pizza.name}
              img={pizza.img}
              price={pizza.price}
              key={pizza.name}
              pizza={pizza}
              addCart={addCart}
            />
          ))}
          {cart.length ? (
            ""
          ) : (
            <div className="mt-24 flex flex-col gap-8 items-center">
              <h1 className="font-medium text-2xl">You haven't ordered yet </h1>
              <Link
                to="/"
                className="flex gap-4 items-center font-medium text-xl"
              >
                <FaArrowLeft className="text-red-600 h-8 w-8" />
                Go Back To Main Page
              </Link>
            </div>
          )}
        </div>
        {cart.length > 0 ? (
          <div
            className={`w-72 h-full flex flex-col mt-4 shadow-lg rounded-xl sm:fixed sm:w-[280px] sm:h-80 sm:overflow-y-scroll sm:overflow-x-hidden sm:z-0 sm:bottom-8 sm:right-4 sm:rounded-2xl sm:shadow-2xl ${
              order ? "sm:flex sm:z-10" : "sm:hidden sm:-z-10"
            }`}
          >
            <div className="w-72 min-h-[240px] flex flex-col gap-4 bg-slate-300 p-5 rounded-t-xl sm:max-w-[280px] sm:flex-row sm:flex-wrap sm:gap-3 ">
              {cart.map((order) => {
                return (
                  <div
                    className="flex gap-2 px-4 py-3 rounded-lg font-semibold text-xl text-slate-100 bg-slate-600 sm:items-center sm:justify-center sm:w-28 sm:font-medium sm:text-base sm:gap-1"
                    key={order.name}
                  >
                    <h1>{order.name}</h1>
                    <h1>({order.quantity})</h1>
                  </div>
                );
              })}
              <FaTimesCircle
                className="hidden w-10 h-10 bg-white rounded-full sm:flex sm:absolute sm:top-2 sm:left-2"
                onClick={() => setOrder(false)}
              />
            </div>
            <div className="flex sm:flex-col sm:bottom-0">
              <Link
                to="/sign-in"
                className="w-full bg-red-600 text-slate-100 text-center font-medium px-4 py-2 rounded-bl-xl hover:bg-red-700 sm:rounded-none transition-all ease-in duration-150"
              >
                Sign Up To Order
              </Link>
              <Link
                to="/"
                className="w-full bg-zinc-600 text-slate-100 text-center flex justify-center items-center border-slate-300 border-l-2 sm:border-l-0 font-medium px-4 py-2 rounded-br-xl hover:bg-zinc-700 transition-all ease-in duration-150"
              >
                Change Order
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-72 h-full flex-col  mt-4 shadow-lg rounded-xl hidden sm:fixed">
            No Order
          </div>
        )}
        <button
          className={`w-14 h-14 fixed p-3 items-center justify-center bg-slate-500 rounded-md text-slate-100 bottom-10 right-8 hidden ${
            order ? "sm:hidden" : "sm:flex"
          }`}
          onClick={() => {
            if (cart.length > 0) setOrder(true);
          }}
        >
          <FaMoneyCheckAlt className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Index;
