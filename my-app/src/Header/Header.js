import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
              <img className='logo' src=" images/Shopify.png" alt="" /></div>
              
              <Nav.Link  href="#home" onClick={() => navigate('/')} >  Home  </Nav.Link>
              <Nav.Link href="#link"> About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
             
              {/* <Nav.Link href="#link">Women's</Nav.Link>
              <Nav.Link href="#link">Electronics</Nav.Link>
              <Nav.Link className='hiredesign' href="#link">Jewelery</Nav.Link>  */}
              {/* <span  */}
              {/* // onClick={() => navigate('/cartitems')} className='navcartcount'>0</span> */}
              <div>
             
              <span  onClick={() => navigate('/cartitems')} 
              className="navcartbutton">   <AddShoppingCartIcon /></span>
                   <form className="searchbox   d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="searchbtn  btn-outline-success" type="submit">Search</button>
      </form>
              <div className="navbutton">
             
              {/* <i className="fa-solid fa-magnifying-glass"></i> */}
         
  
                <a onClick={() => navigate('/signin')}  className="btn signin" href="#">Sign in</a>

                <button onClick={() => navigate('/signup')} 
                className=" btn-outline-success signup  " type="submit">Sign up</button>
                </div>
              </div>

            </Nav>

          </Navbar.Collapse>
        </Container>

      </Navbar>

    </div>
  );

}

export default Header;