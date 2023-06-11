import React from "react";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";

const Order = ({ name, price, addCart, removeCart, decrementCart, order }) => {
  return (
    <div className="min-w-[210px] sm:w-full animate-fade text-slate-100 bg-slate-800 p-3 rounded-lg flex justify-between mb-3 sm:p-2 sm:mb-2">
      <div>
        <div
          className="flex gap-2
        items-center flex-wrap"
        >
          <h1 className="font-bold text-xl sm:text-lg  sm:font-medium">
            {name}
          </h1>
          <div className="flex gap-2 items-center sm:text-md ">
            <button
              className="flex justify-center items-center p-1 text-slate-100 sm:font-medium bg-slate-900 rounded-md"
              onClick={() => {
                decrementCart(order);
                if (order.quantity <= 0) {
                  removeCart(order);
                }
              }}
            >
              <FaMinus className="w-3 h-3" />
            </button>
            <h1 className="font-medium text-xl text-slate-100">
              {order.quantity}
            </h1>
            <button
              className="flex justify-center items-center p-1 text-slate-100 sm:font-medium bg-slate-900 rounded-md"
              onClick={() => addCart(order)}
            >
              <FaPlus className="w-3 h-3" />
            </button>
          </div>
        </div>
        <h2 className="font-semibold">
          €{" "}
          <span>
            {price * order.quantity} (€ {price})
          </span>
        </h2>
      </div>
      <button
        className="p-3 cursor-pointer z-20 text-red-500 sm:p-2"
        onClick={() => {
          removeCart(order);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Order;
