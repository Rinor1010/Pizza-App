import React from "react";
import { TbShoppingCartPlus } from "react-icons/tb";

const Card = ({ name, img, price, addCart, pizza }) => {
  return (
    <div className="w-96 max-h-64 relative overflow-hidden shadow-xl rounded-xl hover:shadow-2xl transition-all ease-in duration-150 animate-drop">
      <img
        className="w-full h-64 sm:h-56 rounded-t-xl object-cover -z-20"
        src={img}
        alt={name}
      />
      <div className="w-full h-36 absolute left-0 top-0 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="h-60 sm:h-52 px-3 py-2 absolute top-2 left-3 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-2xl text-slate-50 drop-shadow-xl">
            {name}
          </h1>
          <p className="text-xl font-semibold text-slate-50 drop-shadow-xl">
            € {price}
          </p>
        </div>
        <button
          className="w-min text-slate-100 flex items-center shadow-2xl bg-green-500 hover:bg-green-700 px-5 py-2 mt-2 rounded-full transition-all duration-200"
          onClick={() => addCart(pizza)}
        >
          <TbShoppingCartPlus />
          Order
        </button>
      </div>
    </div>
  );
};

export default Card;
