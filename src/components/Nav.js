import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css"
import logo from "../img/1991423771714c7bb1174afa2b7363e6.png"

const Nav = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <div className="navcolor">
            <div className="navmain">
                <nav className="navleft">
                    <Link to="/">Adults</Link>
                    <Link to="/">Kids</Link>
                    <Link to="/">Categories</Link>
                    <Link to="/">About us</Link>
                </nav>
                <Link to="/"><img src={logo} alt="RinShop" className="logo" /></Link>
                <nav className="navright">
                    <Link to="/">Profile</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </div>
        </div>
    )
    
}

export default Nav;