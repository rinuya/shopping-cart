import { useState, useEffect } from "react";
import "../style/Shoppingcart.css";

const Shoppingcart = (props) => {
    const list = props.cart;
    const [cart, setCart] = useState([list]);
    if (!cart.length){
        return (
            <div className="shoppingcartouter">
                <div className="shoppingcart">
                    <h3>Cart is empty</h3>
                    <button>Return</button>
                </div>
            </div>
            )
    }
    
    
}

export default Shoppingcart;