import React, { useContext } from 'react'
import { PRODUCTS } from "../../product"
import CartItem from "./CartItem"
import { ShoppingCartContext } from "../../context/shopContext"


const Cart = () => {
    const { cartItem, getTotalCartAmount } = useContext(ShoppingCartContext)
    const totalAmount = getTotalCartAmount()
    

    return (
        <div>
            <div>
                {PRODUCTS.map((element, index) => {
                    if (cartItem[element.id] !== 0) {
                        return (
                            <div>
                                <CartItem key={index} data={element}></CartItem>
                            </div>
                        )
                    }
                })}
            </div>
            {totalAmount > 0 ?
                <div className='total-cart'>
                    <p>Total:{totalAmount} $</p>
                </div> : ''
            }

        </div>
    )

}


export default Cart