import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shoppingcart from "./components/Shoppingcart";
import Itemshop from "./components/Itemshop";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";


function RouteSwitch() {

  const [cart, setCart] = useState([]);

  const updateCart = (_id, _amount) =>{
    if (!cart.some((item) => item.id ===_id)){
      setCart([...cart, {id: _id, amount: _amount}]);
    }
    else{
      setCart(cart.map((item)=>{
        if (item.id ===_id){
          return {id: item.id, amount: item.amount+_amount,}
        }
        else{
          return {...item}
        }
      }))
    }
  }
  useEffect(()=>{
    console.log(cart);
  }, [cart])
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Itemshop cart={cart} updateCart={updateCart} />} />
            <Route path="/cart" element={<Shoppingcart cart={cart} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
