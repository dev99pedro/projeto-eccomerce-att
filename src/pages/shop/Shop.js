import { PRODUCTS } from "../../product"
import Product from "./Product"
import React, { useState } from 'react';
import '../../Style/product.scss'
import Main from "../../components/Main"
import ButtonGoCart from "../../components/ButtonGoCart/ButtonGoCart"


const Shop = () => {


    return (
        <div>
            <Main />
            <div className="product-page">
                {PRODUCTS.map((element, index) => {
                    return (
                        <Product key={index} data={element} />
                    )
                })}
            </div>
          <ButtonGoCart/>
        </div>
    )

}


export default Shop