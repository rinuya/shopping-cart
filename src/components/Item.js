import { useState, useEffect } from "react";
const Item = (props) => {
    const updateCart= props.updateCart;
    const item=props.item;
    //need a state var that keep track of the number of things selected, and add a submit button to send it to cart. 

    return (
        <div className="itemshopcontainer">
            <div className="itemshopmain">
                <h1>
                    test

                </h1>
            </div>
        </div>
    )
    
}

export default Item;