import React, { useState, useEffect } from "react";
import axios from "axios";
import Orders from "./elements/Orders";
import Notifications from "./elements/Notifications";
import Earnings from "./elements/Earnings";
import { FaHome, FaBell, FaTasks } from "react-icons/fa";

const Index = ({ ORDERS, session, setSession, token }) => {
  const [element, setElement] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (token !== null || undefined || "") {
      axios
        .get(`${ORDERS}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          setOrders(data.data);
        })
        .catch((err) => {
          // console.error(err);
        });
    } else setSession(false);
  }, []);

  return (
    <div className="pt-24 sm:pt-20 flex">
      {session ? (
        <>
          <div className="w-40 h-screen pt-8 fixed flex flex-col justify-start items-center gap-4 bg-gray-400 sm:w-20">
            <button
              className={`w-14 h-14 p-3 rounded-lg flex justify-center items-center hover:bg-slate-100 hover:text-gray-500 
          ${element === 0 ? "bg-slate-100 text-gray-500" : "text-slate-100"}
          transition-all duration-200`}
              onClick={() => setElement(0)}
            >
              <FaHome className="text-2xl" />
            </button>
            <button
              className={`w-14 h-14 p-3 rounded-lg flex justify-center items-center hover:bg-slate-100 hover:text-gray-500 
          ${element === 1 ? "bg-slate-100 text-gray-500" : "text-slate-100"}
          transition-all duration-200`}
              onClick={() => setElement(1)}
            >
              <FaBell className="text-3xl" />
            </button>
            <button
              className={`w-14 h-14 p-3 rounded-lg flex justify-center items-center hover:bg-slate-100 hover:text-gray-500
          ${element === 2 ? "bg-slate-100 text-gray-500" : "text-slate-100"}
          transition-all duration-200`}
              onClick={() => setElement(2)}
            >
              <FaTasks className="text-3xl" />
            </button>
          </div>
          <div className="w-4/5 h-5/6 absolute left-48 sm:left-20 p-10 sm:p-6">
            {element === 0 ? (
              <Orders
                orders={orders}
                setOrders={setOrders}
                ORDERS={ORDERS}
                token={token}
              />
            ) : element === 1 ? (
              <Notifications />
            ) : (
              <Earnings orders={orders} setOrders={setOrders} />
            )}
          </div>
        </>
      ) : (
        <h1 className="font-bold text-3xl m-auto pt-20">Forbidden</h1>
      )}
    </div>
  );
};

export default Index;
