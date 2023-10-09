import React, { useContext } from 'react'
import { PRODUCTS } from "../../product"
import CartItem from "./CartItem"
import { ShoppingCartContext } from "../../context/shopContext"
import TotalCartValue from '../../components/TotalCartValue/TotalCartValue'


const Cart = () => {
    const { cartItem, getTotalCartAmount } = useContext(ShoppingCartContext)
    const totalAmount = getTotalCartAmount()


    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row-reverse',paddingBottom: '20px'}}>


                {totalAmount > 0 ?
                    <TotalCartValue /> :''
                }
                <div style={{margin: 'auto'}}>
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
            </div>


        </div>
    )

}


export default Cart