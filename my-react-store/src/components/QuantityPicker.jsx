import { useState } from "react";

function QuantityPicker(props){

    const [quantity, setQuantity] = useState(1);

    function increaseQuantity(){
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    function decreaseQuantity(){
        let newQuantity = quantity - 1;
        if(newQuantity > 0)
        {
        setQuantity(newQuantity);
        }
    }
    //quantity = 1; //This is an incorrect statement.
    //setQuantity(2); //This is the correct way to update the state.
           

   return(
   <div className="quantity-picker">
        <button className="btn-plus" onClick={increaseQuantity}>+</button>;
        <label className="label-quantity">{quantity}</label>;
        <button className="btn-minus" onClick={decreaseQuantity}>-</button>;
   </div>


    );
}

export default QuantityPicker;