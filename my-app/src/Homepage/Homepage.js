import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './Homepage.css'
import Rating from "@mui/material/Rating";
import  Button from  "@mui/material/Button";
const baseURL = "https://fakestoreapi.com/products";
function Homepage(Props) {
  const [card, setCards]=useState([]);
  useEffect(()=>{
    Axios.get(baseURL).then((result) => {
      setCards(result.data);
    },[]);
      
    
  })
  const userData = JSON.parse(localStorage.getItem('userInfo'))
  const [isLoggedIn, setIsLoggedIn] = useState(userData);
  const AddItems=(e)=>{
    e.preventDefault();
    if (isLoggedIn ==userData ) {
      console.log('items added to cart');
    } else  {
      console.log('Please login to continue');
    }
  }
  return (
    
      <>
      <div className="grid  " >
        {card.map((items)=>{
          let{id,title,price,description,category,image}=items;

          description = description.length>50 ?description.substring(0,40) +"..."  : description
          title = title.length>20? title.substring(0,20)+"...": title
          return(
        
            <div className='cards  '  key={id} >
                <h2 className='title'> <b> {title}</b> </h2> <hr />

             <span className="img"><img className='cardimg' src={image} alt=""  /></span>
            

             
              <p className='price'> <b> {price}$ </b></p>
              <p className='category'> <b>{category} </b> </p>
              
              <p className='description '>  {description}  </p>
               <div className='rating'><Rating name="size-medium" defaultValue={2} /></div>
             
              <div className='button d-grid mt-1'> <Button name='AddToCart' variant="contained" onClick={AddItems} disable={isLoggedIn ? "true" : "false"} >Add to Cart</Button>  </div>
             
              
            </div>
         
          )
        })
      
}
</div>
      </>
    
  )
}

export default Homepage


// onClick={AddItems} disable={isLoggedIn ? "userData" : "false"}