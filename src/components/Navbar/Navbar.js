import { Link } from "react-router-dom";
import React from "react";
import '../../Style/navbar.scss';
import IMAGES from '../../imagesExport/Index'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="container-logo">
                <Link to="/">
                    <h1 className="logo under">
                        GALAXY
                    </h1>
                </Link>
            </div>
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