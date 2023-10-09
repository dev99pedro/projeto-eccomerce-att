import '../../Style/totalcart.scss'
import React, { useContext } from 'react'
import { ShoppingCartContext } from "../../context/shopContext"

const TotalCartValue = () => {
    const { cartItem, getTotalCartAmount } = useContext(ShoppingCartContext)
    const totalAmount = getTotalCartAmount()

    console.log(totalAmount)
    return (
        <div className="total-cart-value">
            <p>Total dos ítens: <br /> <span style={{ borderBottom: '3px solid #ff7400' }}>{totalAmount}R$</span> </p>
        </div>
    )
}


export default TotalCartValue