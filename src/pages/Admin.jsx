import { useState } from 'react'

function Admin() {
  // const [state, setState] = useState(initialValue)
  const [couponCode, setCouponCode] = useState("DEC4") // seCouponCode("JAN3")
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [coupons, setCoupons] = useState([])

  // title, category, image, price 
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("")
  const [itemImage, setItemImage] = useState("")
  const [itemPrice, setItemPrice] = useState(0)
  const [items, setItems] = useState([])

  function saveItem() {
    const newItem = {
      title: itemName,
      category: itemCategory,
      image: itemImage,
      price: itemPrice,
    }

    setItems([...items, newItem])

    setItemName("")
    setItemCategory("")
    setItemImage("")
    setItemPrice(0)
  }

  function saveCoupon() {
    console.log(couponCode)
    console.log(couponDiscount)

    const newCoupon = {
      code: couponCode,
      discount: couponDiscount
    }

    setCoupons([...coupons, newCoupon])

    setCouponCode("")
    setCouponDiscount(0)
  }

  return (
    <div>
      <h1 className="text-center mb-5">Store Administration</h1>

      <div className="d-flex gap-4">
        <section className="w-50">
          <div className="p-4 border rounded bg-white">
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Item Category</label>
              <input type="text" className="form-control" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Item Image (URL)</label>
              <input type="url" className="form-control" value={itemImage} onChange={(e) => setItemImage(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Item Price</label>
              <input type="text" className="form-control" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}></input>
            </div>

            <div className="text-center">
              <button className="btn btn-dark" onClick={saveItem}>Save Item</button>
            </div>
          </div>

          <ul className='list-group mt-4'>
            { items.map(item => (
                <li className='list-group-item'> 
                  <img className='w-50 h-50' src={item.image} alt="" /> {item.title} ${item.price}, {item.category} 
                </li>
            ))}
          </ul>
        </section>

        <section className="w-50">
          <div className="p-4 border rounded bg-white">
            <div className="mb-3">
              <label className="form-label">Code</label>
              <input type="text" className="form-control" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Discount</label>
              <input type="number" className="form-control" value={couponDiscount} onChange={(e) => setCouponDiscount(e.target.value)}/>
            </div>

            <div className="text-center">
              <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
            </div>
          </div>

          <ul className='list-group mt-4'>
            { coupons.map(coupon => (
                <li className='list-group-item'>{coupon.code} - {coupon.discount}% </li>
            ))}
          </ul>

        </section>
      </div>
    </div>
  )
}

export default Admin;