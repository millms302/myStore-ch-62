import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from 'react';

function Product(props) {

const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty){
        console.log("Quantity Changed: " + qty)
        setQuantity(qty);

    }

    function getTotal() {
        return (props.data.price * quantity).toFixed(2);
    }

    return (
        <div className="products">
            <img src={'/images/' + props.data.image} alt="Product" />
            <h5>{props.data.title}</h5>
            <div className="prices" >
                <label>${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange}/>
            <button className="btn btn-sm btn-outline-primary">Add</button>
        </div>
    );
} export default Product;