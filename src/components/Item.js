import { useState, useEffect } from "react";
import "../style/Item.css";
import { dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

dom.watch()

const Item = (props) => {
    const updateCart= props.updateCart;
    const id = props.item.id;
    //need a state var that keep track of the number of things selected, and add a submit button to send it to cart. 
    const [amount, setAmount] = useState(0);

    //will be changing based on input typed, once submit has been clicked, it wil lchange the amount above, which is overwise only changed when the buttons are hit
    const [inputAmount, setInputAmount] = useState(0);

    if (inputAmount === 0){
        return (
            <div className="itemmain">
            <img alt={props.item.title} src={props.item.image} key={id} />
            <h4>{props.item.title}</h4>
            <p>{props.item.price}</p>
            <form>
                <button type="button" onClick={()=>setInputAmount(inputAmount>0 ? inputAmount-1 : inputAmount)}>-</button>
                <input placeholder=""></input>
                <button type="button" onClick={()=>setInputAmount(inputAmount+1)}>+</button>
                <button type="submit"><FontAwesomeIcon className="icon" icon={faCartShopping} />Add to Cart</button>
            </form>
        </div>
        )
    }
    else {

    }
        return (
            <div className="itemmain">
               <img alt={props.item.title} src={props.item.image} key={id} />
                <h4>{props.item.title}</h4>
                <p>{props.item.price}</p>
                <form>
                    <button type="button" onClick={()=>setInputAmount(inputAmount>0 ? inputAmount-1 : inputAmount)}>-</button>
                    <input placeholder={inputAmount}></input>
                    <button type="button" onClick={()=>setInputAmount(inputAmount+1)}>+</button>
                    <button type="submit"><FontAwesomeIcon className="icon" icon={faCartShopping} />Add to Cart</button>
                </form>
            </div>
        )
    
}

export default Item;