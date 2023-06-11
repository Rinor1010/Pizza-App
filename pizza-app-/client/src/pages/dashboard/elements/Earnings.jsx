import React, { useState } from "react";

const Earnings = ({ orders }) => {
  const [time, setTime] = useState("today");

  const onSelect = (e) => {
    setTime(e.target.value);
  };

  const filterDate = (order) => {
    let date = new Date(Date.parse(order.time));
    switch (time) {
      case "today":
        console.log(date.getDay());
        break;

      default:
        break;
    }
  };

  let amount = orders.map(
    (order) =>
      order.done === true &&
      order.cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
  );

  let total = amount.reduce((prev, current) => prev + current, 0);

  return (
    <>
      <div className="w-4/5 flex flex-wrap justify-between gap-4">
        <h1 className="text-3xl  font-semibold sm:text-2xl">Earnings</h1>
        <select
          id="countries"
          className="w-1/5 min-w-[160px] bg-gray-50 border-2 border-slate-400 text-gray-900 text-base font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            onSelect(e);
            orders.map((order) => filterDate(order));
          }}
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>
      <div className="w-4/5 pt-8 flex flex-col gap-3">
        {orders.map(
          (order, index) =>
            order.done === true && (
              <div
                className="w-full min-h-[64px] flex flex-wrap justify-between sm:gap-6 items-center border-b-[1px] border-slate-500"
                key={index}
              >
                <h1 className="text-lg font-semibold">{order.name}</h1>
                <h2>{order.address}</h2>
                <h2>{order.phone}</h2>
                <h2 className="font-bold text-lg">
                  {order.cart.reduce(
                    (sum, { price, quantity }) => sum + price * quantity,
                    0
                  )}{" "}
                  €
                </h2>
              </div>
            )
        )}
        <div className="w-4/5 h-20 absolute bottom-0 p-5 flex justify-between items-center bg-slate-200 border-slate-400 border-2 rounded-lg sm:p-3 sm:h-14">
          <h1 className="text-2xl font-semibold sm:text-xl">Total:</h1>
          <h1 className="text-2xl font-bold border-b-4 border-black sm:text-xl">
            € {total}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Earnings;
