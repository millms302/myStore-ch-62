import { useState } from "react";
import "./quantitypicker.css";

function QuantityPicker(props) {

    const [quantity, setQuantity] = useState(1);

    function increaseQuantity(){
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
        console.log("Increase Clicked");
        props.onChange(newQuantity) // Notify the Parent about the Age.
    }

    function decreaseQuantity(){
        let newQuantity = quantity - 1;
        if(newQuantity > 0)
        {
        setQuantity(newQuantity);
        console.log("Decrease Clicked");
        props.onChange(newQuantity) // Notify the parent about the change.
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