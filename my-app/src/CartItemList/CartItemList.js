import React  from 'react'
import {useSelector} from 'react-redux'
function CartItemList() {
  const data = useSelector((state)=>state.cartReducer)
 
  return (
    <div>
      <h3>Cart Items</h3>
    </div>
  )
}

export default CartItemList
