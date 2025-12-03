const catalog = [
    {
        "title":"Orange",
        "category":"Fruit",
        "price": 1,
        "image":"orange.png",
        "_id":"1",
    },
    {
        "title":"Chocolate",
        "category":"Dessert",
        "price": 2,
        "image":"chocolate.png",
        "_id":"2",
    },
    {
        "title":"Strawberry",
        "category":"Fruit",
        "price": .25,
        "image":"strawberry.png",
        "_id":"3",
    },
    {
        "title":"Milk",
        "category":"Dairy",
        "price": 2,
        "image":"milk.png",
        "_id":"4",
    },
    {
        "title":"Beer",
        "category":"Beer",
        "price": 4,
        "image":"beer.png",
        "_id":"5",
    },
]

class DataService{
    getProducts(){
        return catalog;
    }
}
export default DataService;