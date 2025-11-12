import "./Catalog.css";
import Product from "../components/Product.jsx";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {

    const [products,setProducts]=useState([]);
    useEffect(()=>{
        // Load your data
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    
    },[]); //the empty array [ means this effect runs only once.
    

    return (
        <div className="catalog">
            <h1>Check Out Our Amazing Products</h1>
            {products.map(prod => <Product key ={prod._id} data={prod}/> )}
        </div>
    
    );
}
export default Catalog;