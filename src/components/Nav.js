import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css"

const Nav = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <div className="navmain">
            <nav className="navleft">
                <Link to="/">Adults</Link>
                <Link to="/">Kids</Link>
                <Link to="/">Categories</Link>
                <Link to="/">About us</Link>
            </nav>
            <i className="logo">Logo</i>
            <nav className="navright">
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    )
    
}

export default Nav;