import { useState, useEffect } from "react";
import "../style/Itemshop.css"
const Itemshop = (props) => {

    const cart = props.cart;
    const updateCart= props.updateCart;
    const [shop, changeShop] = useState([]);

    useEffect(()=>{
        async function fetchItemshop() {
            let response = await fetch('https://fakestoreapi.com/products');
            response = await response.json();
            console.log(response);
            changeShop(response);
        }
        fetchItemshop();
    }, [])


    if(!shop.length){
        return (
            <div className="itemshopcontainer">
                <div className="itemshopmain">
                    <p>loading...</p>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="itemshopcontainer">
                <div className="itemshopmain">
                    {shop.map((item)=>{
                        return <img alt={item.title} src={item.image} />
                    })}
                </div>
            </div>
        )
    }
   
    
}

export default Itemshop;