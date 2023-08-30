import { PRODUCTS } from "../../product"
import Product from "./Product"
import '../../Style/product.scss'


const Shop = () => {


    return (
        <div className="product-page">
            {PRODUCTS.map((element, index) => {
                return (
                    <Product key={index} data={element} />
                )
            })}
        </div>
    )

}


export default Shop