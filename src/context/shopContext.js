import React, { useState, createContext } from "react"
import { PRODUCTS } from "../product";

export const ShoppingCartContext = createContext({})


export const ShopCartContextProvider = ({ children }) => {

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItem[item] * itemInfo.price
            }
        }

        return totalAmount
    }


    const getDefault = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0
        }
        return cart
    }

    const [cartItem, setCartItem] = useState(getDefault())
    const [cartTeste, setCartTeste] = useState()


    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removetoCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }



    return (
        <ShoppingCartContext.Provider value={{ addToCart, cartItem, removetoCart, getTotalCartAmount }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}