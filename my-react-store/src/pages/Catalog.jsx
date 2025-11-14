import "./Catalog.css";
import Product from "../components/Product.jsx";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]) //Hold Categories list
    const [prodsToDisplay, setProdsToDisplay] = useState([]) //Hold products to show


    useEffect(() => {
        // Load your data
        console.log("Component loaded")
        loadCatalog()
    }, []
    ); //the empty array [] means this effect runs only once.

    function loadCatalog() {
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data)
        setProdsToDisplay(data) // initially display all products.

        let cats = ["Beer","Fruit", "Vegetable", "Dairy", "Dessert"]
        setCategories(cats)
    }

    function filter(category) {
        let list = []
        products.forEach(prod => {
            if (prod.category === category) {
                list.push(prod)
            }
        })
    setProdsToDisplay(list)
    }

    function clearFilter(){
        setProdsToDisplay(products)
    }


    return (
        <div className="catalog"> 
            <h1>Check Out Our Amazing Products</h1>

            <div className="filters">
                <button onClick={clearFilter} className='btn btn-dark btn-filter'> All </button>
            </div>
            {categories.map(cat => <button key={cat} onClick={() => filter(cat)}
                className='btn btn-primart btn-filter'>{cat}</button>
            )}

            <div className="product-list">
                {prodsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}
            </div>

        </div>

    )

}
export default Catalog;