 import '../../css/Navbar.css'
 import { Link } from "react-router-dom"
 
 const Navbar = () =>{
    return (
     <header>
         <nav>
             <ol className='navbar'>
                 <li><Link to='/home' className='link'>Home</Link></li>
                 <li><Link to='/card' className='link'>Card</Link></li>
                 <li><Link to='/about' className='link'>About</Link></li>
                 <li><Link to='/profile' className='link'>Profile</Link></li>
                 <li><Link to='/contact' className='link'>Contact</Link></li>
             </ol>
         </nav>
     </header>
    );
 };
 export default Navbar;

