import React, { CreateContext, useEffect, useState } from 'react';
import Axios from 'axios'
import './Homepage.css'
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../redux/actions/actions';
import FormatPrice from './FormatPrice'
import { RotatingLines } from  'react-loader-spinner'
import CartItemList from '../CartItemList/CartItemList';
// const baseURL = "https://fakestoreapi.com/products";
const baseURL = "https://dummyjson.com/products";

function Homepage(Props) {
  const [card, setCards] = useState([]);

  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    Axios.get(baseURL).then((result) => {
     // console.log(result.data.products)
      setCards(result.data.products);
      setLoading(false);
    }, []);


  })
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userInfo'))
  const [Items, setItems] = useState(userData);

  const data = useSelector((state) => state.cartReducer)
  const AddItems = (items) => {
    if (userData) {
      dispatch(cartActions(items))
      // navigate('./cartitems')
      // console.log(data)
      // console.log(items)
    } else {
      navigate('/signin')
      console.log('Please login to continue');
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data])







  return (

    <>
{ loading?  <RotatingLines className='load'
  strokeColor="black"
  strokeWidth="5"
  animationDuration="0.75"
  width="50"
  
  visible={true}
/>   :     
      <div className="grid  " >

      {card.map((items) => {
      //  let { id, title, price, description, category, image } = items;
let {id,title,description,price,discountPercentage,brand,category,images} = items;
        description = description.length > 50 ? description.substring(0, 40) + "..." : description
        title = title.length > 20 ? title.substring(0, 20) + "..." : title
        return (

          <div className='cards  ' key={id} >
            <h2    onClick={() => {
              navigate(`/ProductDetail/${id}`,{state:items})
            }}  className='title'> <b> {title}</b> </h2> <hr />

            <span onClick={() => {
              navigate(`/ProductDetail/${id}`,{state:items})
            }
            } className="img"   ><img className='cardimg' src={images[0]} alt="error" /></span>
            <p className='price'> <b> {<FormatPrice price={price} />} </b></p>
            <p className='category'> <b>{category} </b> </p>

            <p className='description '>  {description}  </p>
            <div className='Allrating'><Rating name="size-medium" defaultValue={2} /></div>
 <div className='button d-grid mt-1'> <Button name='buttonAddToCart' variant="contained" onClick={() => AddItems(items)} disable={Items ? "userData" : "false"} >Add to Cart</Button>  </div>

{/* <div className='discountPercentage'> {discountPercentage}</div> */}
{/* <div className="stock">{stock}</div> */}
{/* <div className="brand">{brand}</div> */}

          </div>

        )
      })

      }
    </div> }
      
    </>

  )
}

export default Homepage

