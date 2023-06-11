import React from "react";
import Cart from "./cart/Cart";
import Pizzas from "./cards/Pizzas";

const Index = ({ cart, addCart, decrementCart, removeCart }) => {
  return (
    <div className="flex justify-between pt-24">
      <Pizzas addCart={addCart} />
      <Cart
        cart={cart}
        addCart={addCart}
        decrementCart={decrementCart}
        removeCart={removeCart}
      />
    </div>
  );
};

export default Index;
