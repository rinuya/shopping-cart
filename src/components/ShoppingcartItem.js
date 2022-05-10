import "../style/ShoppingcartItem.css";

const ShoppingcartItem = (props) => {
    const cartItem = props.cartItem;
    const shop = props.shop;
    const deleteItem = props.deleteItem;

    let shopitem = shop.find(shpitem=> shpitem.id === cartItem.id);
    console.log(shopitem)
    return (
        <div className="cartItem">
                    <img src={shopitem.image}  alt="shopitem.title" />
                    <h4>{shopitem.title}</h4>
                    <div><h3>{shopitem.price}</h3> x {cartItem.amount}</div>
                    <button className="delete" type="button" onClick={()=>deleteItem(cartItem.id)}>Delete</button>
                   
        </div>
        )   
}

export default ShoppingcartItem;