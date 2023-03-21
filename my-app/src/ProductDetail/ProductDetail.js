import React from 'react'
import { useLocation } from 'react-router-dom'
import Rating from "@mui/material/Rating";
import './ProductDetail.css'
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
    const location = useLocation()
    const product = location.state
    console.log(product)
    const navigate = useNavigate();
  return (
    <div className='singleCard'>
       <div className='CardImg'> <img className='SingleCardImg' src={product.images[0]} alt="" /></div>
       <div className="SingleCardDetails">
      <h2 className='SingleCardTitle'>{product.title}</h2><hr />
     
      <p className='SingleCardPrice'> <b className='Singleprice'> ${product.price} </b></p>
      
      <p className='SingleCardCategory'> <b>{product.category} </b> </p>
<p className='SingleCardDescription '>  {product.description}  </p>

<div className='rating'><Rating name="size-medium" defaultValue={2} /></div>
<div className='SingleCardButton   '>
     <Button name='AddToCart' variant="contained" onClick={() => navigate('/cartitems')}  >Add to Cart</Button> 
    
      </div>
    
</div>
</div>
  )
}

export default ProductDetail
