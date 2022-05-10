import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shoppingcart from "./components/Shoppingcart";
import Itemshop from "./components/Itemshop";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";


function RouteSwitch() {

  //Initialize Shop and load data from fakestoreapi
  const [shop, changeShop] = useState([]);

  useEffect(()=>{
      async function fetchItemshop() {
          let response = await fetch('https://fakestoreapi.com/products');
          response = await response.json();
          changeShop(response);
      }
      fetchItemshop();
  }, [])

  //Initialize Cart, and set an updatecart function (which checks wether the updated item is already in the cart, in that case it adds it, otherwise, it creates a new item)
  const [cart, setCart] = useState([]);

  const updateAddCart = (_id, _amount) =>{
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

  //deletes item from cart
  const deleteItem = (_id) => {
    setCart(cart.filter(item=> item.id !== _id))
  }


  //This function helps me track where what happens with the cart
  useEffect(()=>{
    console.log(cart);
  }, [cart])

  return (
    <BrowserRouter>
    <div className="App">
      <Nav cart={cart} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Itemshop shop={shop} cart={cart} updateAddCart={updateAddCart} />} />
            <Route path="/cart" element={<Shoppingcart shop={shop} cart={cart} deleteItem={deleteItem} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
