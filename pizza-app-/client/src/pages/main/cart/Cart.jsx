import React, { useState } from "react";
import { Link } from "react-router-dom";
import Order from "./order/Order";
import { FaTimes, FaShoppingCart, FaCartArrowDown } from "react-icons/fa";

const Cart = ({ cart, removeCart, addCart, decrementCart }) => {
  const [order, setOrder] = useState(false);

  return (
    <div
      className={`w-96 h-100 bg-neutral-900 p-4 sm:fixed sm:w-[240px] sm:max-h-80 sm:overflow-y-scroll sm:overflow-x-hidden sm:z-0 sm:bottom-8 sm:right-4 sm:p-3 sm:rounded-2xl sm:shadow-2xl ${
        order ? "sm:bg-black" : "sm:bg-opacity-0"
      }`}
    >
      <div
        className={`fixed flex flex-col min-w-[210px] justify-between overflow-hidden pr-4 ${
          order
            ? "sm:flex sm:z-10 sm:translate-x-0"
            : "sm:hidden sm:-z-10 sm:translate-x-36"
        } sm:relative sm:top-0 sm:right-0 sm:pr-1 transition-all ease-out duration-500`}
      >
        <FaTimes
          size={32}
          className="hidden fixed top-0 sm:flex text-slate-100"
          onClick={() => setOrder(false)}
        />
        <h1 className="text-2xl text-slate-100 border-b-2 mb-5 sm:text-xl sm:mb-3 sm:pt-12">
          {cart.length ? "YOUR ORDER" : "ADD TO CART"}
        </h1>
        {cart.map((order, index) => (
          <Order
            name={order.name}
            price={order.price}
            key={index}
            removeCart={removeCart}
            order={order}
            addCart={addCart}
            decrementCart={decrementCart}
          />
        ))}
        <Link
          to="/my-orders"
          className="bg-red-700 w-56 rounded-tl-xl flex justify-between items-center py-4 px-5 fixed bottom-0 right-0 sm:absolute sm:top-0 sm:h-10 sm:w-44 sm:py-3 sm:px-2 sm:text-base 
          sm:rounded-lg text-slate-100 font-bold sm:font-semibold hover:bg-red-800 transiton-all ease-in duration-150"
        >
          <h1 className="flex gap-2 items-center text-lg sm:text-base sm:gap-1">
            <FaCartArrowDown />
            CHECKOUT
          </h1>
          <p className="text-xl sm:text-lg">
            €{" "}
            {cart.reduce(
              (sum, { price, quantity }) => sum + price * quantity,
              0
            )}
          </p>
        </Link>
      </div>
      <button
        className={`p-4 justify-center items-center bg-black fixed bottom-8 right-5 z-10 rounded-2xl shadow-2xl hidden ${
          order ? "sm:hidden" : "sm:flex"
        }`}
        onClick={() => setOrder(true)}
      >
        <FaShoppingCart className="text-slate-100 h-10 w-10" />
        <div
          className="w-5 h-5 p-3 rounded-[50%] bg-red-700 text-slate-100 flex items-center
        justify-center absolute top-3 right-2"
        >
          <h1 className="font-medium text-center mb-1">
            {cart.reduce((sum, { quantity }) => sum + quantity, 0)}
          </h1>
        </div>
      </button>
    </div>
  );
};

export default Cart;
