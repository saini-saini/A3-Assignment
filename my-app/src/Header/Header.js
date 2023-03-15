import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Header() {
  const navigate =useNavigate();
  return (
    <div className="navbar">
    <Navbar bg="light" expand="lg">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <img  className='logo' src="assets/asset 30.svg" alt="" />
            <Nav.Link href="#home">Inspiration</Nav.Link>
            <Nav.Link href="#link">Find Work</Nav.Link>
            <Nav.Link href="#link">Learn Design </Nav.Link>
            <Nav.Link href="#link">Go Pro</Nav.Link>
            <Nav.Link href="#link">Design Files</Nav.Link>
            <Nav.Link className='hiredesign' href="#link">Hire Designers</Nav.Link>
            <span onClick={()=>navigate('/cartitems')} className='navcartcount'>5</span>
                  <span  onClick={()=>navigate('/cartitems')}  className="navcartbutton">   <AddShoppingCartIcon/></span>
            
      
             <div  className="navbutton"><i class="fa-solid fa-magnifying-glass"></i>

<a onClick={()=>navigate('/signin')} class="btn signin"    href="#">Sign in</a>

<button onClick={()=>navigate('/signup')} class=" btn-outline-success signup  " type="submit">Sign up</button>
</div>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
  
    </div>
  );

}

export default Header;