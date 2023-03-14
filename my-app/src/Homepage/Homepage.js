import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './Homepage.css'
import Rating from "@mui/material/Rating";
import  Button from  "@mui/material/Button";
const baseURL = "https://fakestoreapi.com/products";
function Homepage() {
  const [card, setCards]=useState([]);
  useEffect(()=>{
    Axios.get(baseURL).then((result) => {
      setCards(result.data);
    },[]);
      
    
  })
  return (
    
      <>
      <div className="grid " >
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
             
              <div className='button d-grid mt-1'> <Button variant="contained">Add to Cart</Button>  </div>
             
              
            </div>
          )
        })
      
}
</div>
      </>
    
  )
}

export default Homepage
