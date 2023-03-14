import './App.css';
// import Welcome from './Welcome/Welcome'
import Homepage from './Homepage/Homepage';
import Loginfrom from './LoginForm/Loginfrom';
import Signup from './Signup/Signup';
import { Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
// import Navbar from  './Navbar';
function App() {
  // const navigate =useNavigate();
  return (
    <div className="App">
        <Header/>
      <Routes>
    {/* <Navbar/> */}
  
        <Route path='/' element={ <Loginfrom/>}/>
     
        {/* <Route path ='/home' element={ <Header/>}/> */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Loginfrom/>}/>
        <Route path='/home' element ={< Homepage/>}/>
      </Routes>
     
   
    </div>
  );
}

export default App;
