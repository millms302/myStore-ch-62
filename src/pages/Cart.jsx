import './Cart.css'
import GlobalContext from '../state/globalContext'
import{ useContext } from 'react'

function Cart() {
    const cart = useContext(GlobalContext).cart

    function getTotalItems() {
    let sum = 0;

    for(let i=0; i<cart.length; i++){
        sum = sum + cart[i].quantity;
    }
    return sum;
    }

    function getTotalPrice() {
        let total = 0

        for(let i=0; i<cart.length; i++) {
            total += cart[i].price * cart[i].quantity
        }

        return total;
    }

    console.log(cart)

    return (
        <div>
            <h1>Your New Gear</h1>
            
            {cart.map(product => 
                <div className='border bg-white mb-4 p-4 d-flex justify-content-between align-items-center'key={product._id}>
                    <img width={100} src={product.image} alt=""/>
                    <h2>{product.title}</h2>
                    <div className='badge text-bg-dark'>{product.category}</div>
                    <div>Price: ${product.price}</div>
                    <label>QTY: {product.quantity}</label>
                    <label>Total: $ {product.price * product.quantity}</label>
                </div>
            )}

            <h3>You have {getTotalItems()} Products in your cart. </h3>
            <h4>Total: <strong>${getTotalPrice()}</strong></h4>

        </div>
    )
}

export default Cart