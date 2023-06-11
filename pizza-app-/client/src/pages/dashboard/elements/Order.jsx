import React, { useState } from "react";
import axios from "axios";
import { FaCheck, FaTrash, FaMinus } from "react-icons/fa";

const Order = ({ ORDERS, order, name, phone, address, cart, token }) => {
  const [done, setDone] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const updateOrder = () => {
    axios.patch(`${ORDERS}/${order._id}`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteOrder = () => {
    axios.delete(
      `${ORDERS}/${order._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      order
    );
  };

  return (
    <>
      {!deleted && (
        <div
          className={`w-80 flex justify-between ${
            done || order.done
              ? "bg-green-400 border-slate-300"
              : "bg-slate-300 border-green-400"
          } border-2 p-5 rounded-xl shadow-lg sm:max-w-[240px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 transition-all duration-300 animate-drop`}
          key={name}
        >
          <div
            className={`w-32 flex flex-col font-semibold text-left drop-shadow-md gap-2 sm:text-center ${
              done || order.done ? "text-slate-100" : ""
            }`}
          >
            <h1 className="text-xl font-bold">{name}</h1>
            <h2 className="font-bold text-lg">
              €{" "}
              {cart.reduce(
                (sum, { price, quantity }) => sum + price * quantity,
                0
              )}
            </h2>
            <h2>{phone}</h2>
            <h2>{address}</h2>
          </div>
          <div className="flex flex-col gap-2">
            {cart.map((order, index) => (
              <div
                className="flex gap-2 p-2 rounded-lg font-semibold text-md text-slate-100 bg-slate-500 sm:items-center sm:justify-center sm:w-36 sm:font-medium sm:text-base sm:gap-1"
                key={index}
              >
                <h1>{order.name}</h1>
                <h1>({order.quantity})</h1>
              </div>
            ))}
            <div className="w-full pt-2 flex gap-4 justify-center relative bottom-0">
              <button
                className={`w-8 h-8 rounded-3xl ${
                  done || order.done
                    ? "bg-slate-500 hover:bg-slate-600"
                    : "bg-green-400 hover:bg-green-600"
                } flex items-center justify-center transition-all duration-100`}
                onClick={() => {
                  updateOrder();
                  setDone(!done);
                }}
              >
                {done || order.done ? (
                  <FaMinus className="text-slate-100" />
                ) : (
                  <FaCheck className="text-slate-100" />
                )}
              </button>
              <button
                className="w-8 h-8 rounded-3xl bg-red-500 flex items-center justify-center hover:bg-red-700 transition-all duration-100"
                onClick={() => {
                  deleteOrder();
                  setDeleted(true);
                }}
              >
                <FaTrash className="text-slate-100" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
