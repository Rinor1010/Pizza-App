import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, SignIn, MyOrders, Dashboard, Admin } from "./pages";
import Navbar from "./components/Navbar";
import ScrollToTop from "./pages/ScrollToTop";
const POST = process.env.REACT_APP_POST;
const ADMIN = process.env.REACT_APP_ADMIN;
const ORDERS = process.env.REACT_APP_ORDERS;

const App = () => {
  const [cart, setCart] = useState([]);
  const [session, setSession] = useState(false);
  const [token, setToken] = useState("");

  const addCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((product) => item.name === product.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...item,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const decrementCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((product) => item.name === product.name);
    if (itemInCart) {
      itemInCart.quantity--;
      if (itemInCart.quantity <= 0) {
        removeCart(itemInCart);
      }
    }
    setCart(newCart);
  };

  const removeCart = (itemToRemove) => {
    setCart(cart.filter((product) => product !== itemToRemove));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  cart={cart}
                  addCart={addCart}
                  decrementCart={decrementCart}
                  removeCart={removeCart}
                />
              }
              exact
            />
            <Route
              path="/sign-in"
              element={<SignIn cart={cart} POST={POST} />}
              exact
            />
            <Route
              path="/sign-in/admin"
              element={
                <Admin
                  setSession={setSession}
                  setToken={setToken}
                  ADMIN={ADMIN}
                />
              }
              exact
            />
            <Route
              path="/my-orders"
              element={
                <MyOrders
                  cart={cart}
                  setCart={setCart}
                  addCart={addCart}
                  decrementCart={decrementCart}
                />
              }
              exact
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  cart={cart}
                  setCart={setCart}
                  addCart={addCart}
                  decrementCart={decrementCart}
                  ORDERS={ORDERS}
                  session={session}
                  setSession={setSession}
                  token={token}
                />
              }
              exact
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
