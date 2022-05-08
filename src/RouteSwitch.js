import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shoppingcart from "./components/Shoppingcart";
import Itemshop from "./components/Itemshop";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";


function RouteSwitch() {

  const [cart, setCart] = useState([]);

  const updateCart = () =>{
    setCart=[];
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Itemshop cart={cart} updateCart={updateCart} />} />
            <Route path="/cart" element={<Shoppingcart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
