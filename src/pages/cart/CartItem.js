
import React, { useContext } from 'react'
import { ShoppingCartContext } from "../../context/shopContext"
import '../../Style/cartitem.scss'
const CartItem = ({ data }) => {

    const { id, price, productImg, productName } = data
    const { cartItem, addToCart, removetoCart } = useContext(ShoppingCartContext)


    return (
        <div className='cart-container'>
            <div className='cart'>
                <div>
                    <img className='cart-img' src={productImg} alt='produto' />
                </div>
                <div className='cart-data' >
                    <h2 className='cart-nome'>
                        {productName}
                    </h2>
                    <span>
                        ${price}
                    </span>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='btn-input' onClick={() => removetoCart(id)}>-</button>
                        <input value={cartItem[id]} style={{ width: '40px' }} type="" />
                        <button className='btn-input' onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CartItem