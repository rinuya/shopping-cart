import { useState, useEffect } from "react";
import "../style/Itemshop.css";
import Item from "./Item";

const Itemshop = (props) => {

    
    const updateCart= props.updateCart;
    const [shop, changeShop] = useState([]);

    useEffect(()=>{
        async function fetchItemshop() {
            let response = await fetch('https://fakestoreapi.com/products');
            response = await response.json();
            changeShop(response);
        }
        fetchItemshop();
    }, [])


    if(!shop.length){
        return (
            <div className="itemshopcontainer">
                <div className="itemshopmain">
                    <p className="loading">loading...</p>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="itemshopcontainer">
                <div className="itemshopmain">
                    <h1 className="categoryDisplayed">All Categories</h1>
                    <div className="display">
                    {shop.map((item)=>{
                        return <Item item={item} updateCart={updateCart} />
                    })}
                    </div>
                </div>
            </div>
        )
    }
   
    
}

export default Itemshop;