import { Link } from "react-router-dom";

const ButtonGoCart = () => {


    return (
        <div>
            <Link to="/cart">
                <button className="btn-go-cart" style={{ marginBottom: '80px' }}>
                    go to cart
                </button>
            </Link>

        </div>
    )

}

export default ButtonGoCart