import { Link } from "react-router-dom";
import "../style/Nav.css"
import logo from "../img/1991423771714c7bb1174afa2b7363e6.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHomeUser } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {

    const cart = props.cart;
    const amt = cart.length
    return (
        <div className="navcolor">
            <div className="navmain">
                <nav className="navleft">
                    <Link to="/">Women</Link>
                    <Link to="/">Men</Link>
                    <Link to="/">Jewelery</Link>
                    <Link to="/">About us</Link>
                </nav>
                <Link to="/"><img src={logo} alt="RinShop" className="logo" /></Link>
                <nav className="navright">
                    <Link to="/"><FontAwesomeIcon className="icon" icon={faHomeUser} /></Link>
                    <Link to="/cart"><div className="cartSection"><p>{amt}</p><FontAwesomeIcon className="iconCartNav" icon={faCartShopping} /></div></Link>
                </nav>
            </div>
        </div>
    )
    
}

export default Nav;