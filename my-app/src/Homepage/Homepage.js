import React, { CreateContext,useEffect, useState } from 'react';
import Axios from 'axios'
import './Homepage.css'
import Rating from "@mui/material/Rating";
import  Button from  "@mui/material/Button";
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { cartActions } from '../redux/actions/actions';

const baseURL = "https://fakestoreapi.com/products";



function Homepage(Props) {
  const [card, setCards]=useState([]);
  const dispatch = useDispatch()

  useEffect(()=>{
    Axios.get(baseURL).then((result) => {
      setCards(result.data);
    },[]);
      
    
  })
  const navigate =useNavigate();
  const userData = JSON.parse(localStorage.getItem('userInfo'))
  const [Items, setItems] = useState(userData);
  const data = useSelector((state)=>state.cartReducer)
  const AddItems=(items)=>{
    if (userData ) {
      dispatch(cartActions(items))
      //console.log(data)
     // console.log(items)
    } else  {
      navigate('/signin')
        console.log('Please login to continue');
      }
  }

  useEffect(()=>{
    console.log(data)
  },[data])
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
             
              <div className='button d-grid mt-1'> <Button name='AddToCart' variant="contained" onClick={()=>AddItems(items)} disable={Items ? "userData" : "false"} >Add to Cart</Button>  </div>
             
              
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