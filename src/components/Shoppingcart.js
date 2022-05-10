import "../style/Shoppingcart.css";
import ShoppingcartItem from "./ShoppingcartItem";

const Shoppingcart = (props) => {
    const cart = props.cart;
    const shop = props.shop;
    const deleteItem = props.deleteItem


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
    return (
        <div className="shoppingcartouter">
            <div className="shoppingcart">
                    {cart.map((item)=>{
                    return (
                        <ShoppingcartItem cartItem={item} shop={shop} deleteItem={deleteItem} />
                    )
                })}
            </div>  
        </div>
    )
    
    
}

export default Shoppingcart;