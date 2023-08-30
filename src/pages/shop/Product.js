import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context/shopContext'
import '../../Style/product.scss'

const Product = ({ data }) => {

    const { id, productName, price, productImg, description, rating } = data // ESSA AQUI É UMA OUTRA MANEIRA DE TU PASSAR TODOS ELEMENTOS DO OBJETO. TU PODERIA BOTAR EM CADA UM {data.productIMG} por exemplo que ia da a mesma coisa
    const { addToCart, cartItem, removetoCart } = useContext(ShoppingCartContext)
    const cartAmount = cartItem[id]





    return (
        <div className='product-container'>
            <div className='product'>
                <div className='img-container-product'>
                    <img src={productImg} className='img-product'>
                    </img>
                </div>
                <div className='name-price-product'>
                    <div className='rating-stars'>
                       <img className='img-rating' src={rating} alt='rating'/>
                    </div>
                    <div className='name-product'>
                        <h1>
                            {productName}
                        </h1>
                    </div>
                    {/* <div className='description-product'>
                        <p>{description}</p>
                    </div> */}

                    <div className='btn-product'>
                        <p className='price-text'>
                            ${price}
                        </p>
                        <button className='btn' onClick={() => addToCart(id)}>Comprar {cartAmount > 0 && <>({cartAmount})</>}</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Product