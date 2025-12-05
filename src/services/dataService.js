const catalog = [
    {
        "title":"Les Paul",
        "category":"Gibson",
        "price": 2599.00,
        "image":"/images/lespaul.png",
        "_id":"1",
    },
    {
        "title":"SG",
        "category":"Gibson",
        "price": 1799.00,
        "image":"/images/sg.png",
        "_id":"2",
    },
    {
        "title":"Stratocaster",
        "category":"Fender",
        "price": 839.99,
        "image":"/images/strat.png",
        "_id":"3",
    },
    {
        "title":"Jazzmaster",
        "category":"Fender",
        "price": 699.99,
        "image":"/images/jazzmaster.png",
        "_id":"4",
    },
    {
        "title": "Charger Jr.",
        "category":"Reverend",
        "price": 899.00,
        "image":"/images/charger-jr.png",
        "_id":"5",
    },
    {
        "title": "Charger HB",
        "category": "Reverend",
        "price": 999.00,
        "image": "/images/charger-hb.png",
        "_id": "6",
    },
    {
        "title": "SE Custon 24 Floyd",
        "category": "PRS",
        "price": 863.00,
        "image": "/images/prs-floyd.png",
        "_id": "7",
    },
    {
        "title": "SE Special Semi-Hollow",
        "category": "PRS",
        "price": 919.00,
        "image": "/images/prs-semi.png",
        "_id": "8",
    },
]

class DataService{
    getProducts(){
        return catalog;
    }
}
export default DataService;