import './App.css';
import Homepage from './Homepage/Homepage';
import Loginfrom from './LoginForm/Loginfrom';
import Signup from './Signup/Signup';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Header from './Header/Header';
import CartItemList from './CartItemList/CartItemList';
import Error from './ErrorPage/Error'
import ProductDetail from './ProductDetail/ProductDetail';
function App() {
  
 return (
  
 <BrowserRouter> 
 
     <div className="App"> 
     
    {window.location.pathname!=="/signin"? <Header/> : null }
   {/* <Header/> */}
      <Routes> 
     <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Loginfrom/>}/>
        <Route path='/' element={ <Loginfrom/>}/>
        <Route path ='/home' element= {<Homepage/>}/>
        <Route path ="/productdetail/:id" element={<ProductDetail/>}/>
        <Route path='/cartitems' element={<CartItemList/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
