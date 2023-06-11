import React, { useState } from "react";
import Order from "./Order";

const Orders = ({ ORDERS, orders, token }) => {
  const [option, setOption] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-5/6 h-12 flex justify-between items-center md:h-24 sm:h-48 md:flex-col md:justify-center">
        <h1 className="font-semibold text-center text-3xl md:text-2xl md:pb-4">
          Today's Orders
        </h1>
        <div className="flex gap-4 flex-wrap sm:pl-6">
          <button
            className={`w-24 h-12 sm:w-20 sm:h-10 rounded-md border-2 
            font-medium ${
              option === 0
                ? "text-slate-100 bg-blue-500"
                : "bg-slate-100 text-blue-500 border-blue-500"
            } transition-all duration-150`}
            onClick={() => setOption(0)}
          >
            All Orders
          </button>
          <button
            className={`w-24 h-12 sm:w-20 sm:h-10  rounded-md border-2 font-medium ${
              option === 1
                ? "text-slate-100 bg-blue-500"
                : "bg-slate-100 text-blue-500 border-blue-500"
            } transition-all duration-150`}
            onClick={() => setOption(1)}
          >
            Done
          </button>
          <button
            className={`w-24 h-12 sm:w-20 sm:h-10 rounded-md border-2 font-medium ${
              option === 2
                ? "text-slate-100 bg-blue-500"
                : "bg-slate-100 text-blue-500 border-blue-500"
            } transition-all duration-150`}
            onClick={() => setOption(2)}
          >
            Undone
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 pb-8 md:justify-center">
        {option === 0
          ? orders.map((order, index) => (
              <Order
                order={order}
                name={order.name}
                phone={order.phone}
                address={order.address}
                cart={order.cart}
                ORDERS={ORDERS}
                token={token}
                key={index}
              />
            ))
          : option === 1
          ? orders
              .filter((order) => order.done === true)
              .map((order) => {
                return (
                  <Order
                    order={order}
                    name={order.name}
                    phone={order.phone}
                    address={order.address}
                    cart={order.cart}
                    ORDERS={ORDERS}
                    token={token}
                    key={order.name}
                  />
                );
              })
          : orders
              .filter((order) => !order.done)
              .map((order) => {
                return (
                  <Order
                    order={order}
                    name={order.name}
                    phone={order.phone}
                    address={order.address}
                    cart={order.cart}
                    ORDERS={ORDERS}
                    token={token}
                    key={order.name}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default Orders;
