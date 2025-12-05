import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState, useContext } from 'react';
import GlobalContext from '../state/globalContext'

function Product(props) {
    const globalAdd = useContext(GlobalContext).addProductToCart

const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty){
        console.log("Quantity Changed: " + qty)
        setQuantity(qty);

    }

    function getTotal() {
        return (props.data.price * quantity).toFixed(2);
    }

    function onAdd() {
        console.log(props.data)
        let fixedProduct = {...props.data}
        fixedProduct.quantity = quantity
        globalAdd(fixedProduct)
    }

    return (
        <div className="products">
            <img src={props.data.image} alt="Product" />
            <h5>{props.data.title}</h5>
            <div className="prices" >
                <label>${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange}/>
            <div>
            <button  onClick={onAdd}className="btn btn-sm btn-outline-primary">Add</button>
            </div>
        </div>

       
    );
} export default Product;