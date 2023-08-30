import { Link } from "react-router-dom";
import React from "react";
import '../../Style/navbar.scss';
import IMAGES from '../../imagesExport/Index'

const Navbar = () => {

    return (
        <div className="navbar">
            <div >
                <Link to="/" className="navbar-shop">
                    Shop
                </Link>
            </div>
            <div >
                <Link to="/cart" >
                   <img className="navbar-cart" src={IMAGES.ShopCart} alt="Shopcar"></img>
                </Link>
            </div>
        </div>
    )

}

export default Navbar