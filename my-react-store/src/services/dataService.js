const catalog = [
    {
        "title":"Orange",
        "category":"Fruit",
        "price": 5,
        "image":"orange.png",
        "_id":"1",
    },
    {
        "title":"Chocolate",
        "category":"Dessert",
        "price": 5,
        "image":"chocolate.png",
        "_id":"2",
    },
    {
        "title":"Strawberry",
        "category":"Fruit",
        "price": 5,
        "image":"strawberry.png",
        "_id":"3",
    },
    {
        "title":"Milk",
        "category":"Dairy",
        "price": 5,
        "image":"milk.png",
        "_id":"4",
    },
]

class DataService{
    getProducts(){
        return catalog;
    }
}
export default DataService;