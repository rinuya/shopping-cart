import { useState } from "react";
import "../style/Item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Item = (props) => {
    const updateAddCart= props.updateAddCart;
    
    const [inputAmount, setInputAmount] = useState(1);

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
                <button type="button" className="submit" onClick={()=>{updateAddCart(props.item.id, inputAmount); setInputAmount(0);}}><FontAwesomeIcon className="icon" icon={faCartShopping} />Add to Cart</button>
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
                    <button type="button" className="submit" onClick={()=>{updateAddCart(props.item.id, inputAmount); setInputAmount(1);}}><FontAwesomeIcon className="icon" icon={faCartShopping} />Add to Cart</button>
                </form>
            </div>
        )
    }   
}

export default Item;