import React from 'react'

import FormatPrice from '../Homepage/FormatPrice'
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { removeCartAction } from '../redux/actions/actions';
import './CardItems.css'

function CartItemList() {
  const data = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  let total = 0
  let GST = '18%'
  const products = useSelector((state) => state.cartReducer)
  console.log(products)
  console.log(data)
  return (
    <div>
      <h3>Cart Items</h3>
      <div>
        {data.map((items) => {
          //  let { id, title, price, description, category, image } = items;
          let { id, title, description, price, discountPercentage, brand, category, images } = items;
          total += price
          return (
            <div className='cardsItemsPage'>
              <div className='cardsItems  ' key={id} >
                <div className="cardsItemsImg"   >
                  <h2 className='cardsItemsittle'> <b> {title}</b> </h2>
                  <img className='cardItemImg' src={images[0]} alt="error" />
                </div>
                <div className='CardItemsDesc'>
                  <p className='cardsItemsCategory'> <b>{category} </b> </p>
                  <p className='cardsItemsDescription '>  {description}  </p></div>
                <div className='cardsItemsPrice'>  <p > <b> {<FormatPrice price={price} />} </b></p>
                  <div className='cardsItemsAllrating'><Rating name="size-medium" defaultValue={2} /></div>
                </div>
                <div className='Button'>
                  <div className='cardsItemsButton'> <Button name='buttonAddToCart' variant="contained" onClick ={()=>dispatch(removeCartAction(id))}>Remove</Button>  </div>
                 
                </div>                         
              </div>             
            </div>         
          )
        })
        }
 <div>                  
  <div className='TotalAmount'>
  <b> Total Amount to Pay : </b> <div className='amount'>  ${total } </div>
  </div> 
</div>    
 </div>
</div>
  )

}
export default CartItemList
