import "../style/Itemshop.css";
import Item from "./Item";

const Itemshop = (props) => {

    const updateAddCart= props.updateAddCart;
    const shop = props.shop;

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
                        return <Item item={item} updateAddCart={updateAddCart} />
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Itemshop;