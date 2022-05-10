import { useState, useEffect } from "react";
import "../style/Item.css";
import { dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Item = (props) => {
    const updateCart= props.updateCart;
    //need a state var that keep track of the number of things selected, and add a submit button to send it to cart. 
    // const [amount, setAmount] = useState(0);

    //will be changing based on input typed, once submit has been clicked, it wil lchange the amount above, which is overwise only changed when the buttons are hit
    const [inputAmount, setInputAmount] = useState(1);

    // function finnishAmount () {
    //     if (inputAmount===0){
    //         return
    //     }
    //     else{
    //         console.log("inputAmount is: "+ inputAmount);
    //         const x = amount + inputAmount;
    //         setAmount(x);
    //         console.log("transferred! new amount that will be passed on is: " + amount);
    //         console.log("New inputAmount is: " + inputAmount)
    //     }
    //     setInputAmount(0);
    // }



    if (inputAmount === 0){
        return (
            <div className="sitemmain" key={props.id}>
            <img alt={props.item.title} src={props.item.image}  />
            <h4>{props.item.title}</h4>
            <p className="price">{props.item.price}</p>
            <form>
                <button type="button" onClick={()=>setInputAmount(inputAmount>0 ? inputAmount-1 : inputAmount)}>-</button>
                <input type="number" placeholder="" onChange={e=> setInputAmount(parseInt(e.target.value))}></input>
                <button type="button" onClick={()=>setInputAmount(inputAmount+1)}>+</button>
                <button type="button" className="submit" onClick={()=>{updateCart(props.item.id, inputAmount); setInputAmount(0);}}><FontAwesomeIcon className="icon" icon={faCartShopping} />Add to Cart</button>
            </form>
        </div>
        )
    }
    else {
        return (
            <div className="sitemmain" key={props.id}>
               <img alt={props.item.title} src={props.item.image} key={props.item.id} />
                <h4>{props.item.title}</h4>
                <p>{props.item.price}</p>
                <form>
                    <button type="button" onClick={()=>setInputAmount(inputAmount>0 ? inputAmount-1 : inputAmount)}>-</button>
                    <input placeholder={inputAmount} type="number" onChange={e=> setInputAmount(parseInt(e.target.value))}></input>
                    <button type="button" onClick={()=>setInputAmount(inputAmount+1)}>+</button>
                    <button type="button" className="submit" onClick={()=>{updateCart(props.item.id, inputAmount); setInputAmount(1);}}><FontAwesomeIcon className="icon" icon={faCartShopping} />Add to Cart</button>
                </form>
            </div>
        )
    }
        
    
}

export default Item;