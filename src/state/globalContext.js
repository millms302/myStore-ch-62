import { createContext } from "react";

// GlobalContext defines the context structure 
const GlobalContext = createContext({
    cart: [], //Default cart is an empty array, will hold products later
    user: {}, //Defualt user is an empty objext; can store user information like name, email, and age.

    addProductToCart: () => {},// Placeholder function to add a product to the cart
    clearCart: () => {}, // Placeholder function to remove all items from the cart.
    removeProductFromCart: () => {} //placeholder function to remove a specific item from the cart
})

// Export the context so it can be used in other components
export default GlobalContext