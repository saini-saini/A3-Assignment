import './App.css';
import Homepage from './Homepage/Homepage';
import Loginfrom from './LoginForm/Loginfrom';
import Signup from './Signup/Signup';
import { Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
// import CartItemList from './CartItemList/CartItemList';

function App() {
  return (
    <div className="App">
        <Header/>
       
      <Routes>  
        <Route path='/' element={ <Loginfrom/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Loginfrom/>}/>
       
        <Route path ='/home' element= {<Homepage/>}/>
        {/* <Route path='/cartitems' element={<CartItemList/>}/> */}
      </Routes>
     
   
    </div>
  );
}

export default App;
