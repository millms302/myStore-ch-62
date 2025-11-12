import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {


    return (
        <div className="products">
            <img className="img" src={"/images/"+props.data.image} alt="Product Image" />
            <div className="product-details">
                <label className="product-name">{props.data.title}</label>
                <label className="product-price">{props.data.price}</label>
                <label className="Total-Price">Total</label>
            </div>
            <QuantityPicker />
        </div>
    )
}


export default Product;