import './Navbar.css';
import Icon from './react-png.png'

function Navbar() {
  return (
        <nav className='navbar'>
            <img className='icon' src={Icon} alt="Icon" />
            <a className='home' href='#'>Home</a>
            <a className='info' href='#'>Info</a>
            <a className='teste' href='#'>Teste</a>
        </nav>
  );
}

export default Navbar;
