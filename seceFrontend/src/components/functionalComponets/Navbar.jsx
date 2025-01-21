import '../../css/Navbar.css'


const Navbar = () =>{
   return (
    <header>
        <nav>
            <ol className='navbar'>
                <li><a href='/' className='link'>Home</a></li>
                <li><a href='/card' className='link'>Card</a></li>
                <li><a href='/about' className='link'>About</a></li>
                <li><a href='/profile' className='link'>Profile</a></li>
                <li><a href='/contact' className='link'>Contact</a></li>
            </ol>
        </nav>
    </header>
   );
};
export default Navbar;

