import './navbar.css';
import Icon from './react-png.png'

function Navbar() {
  return (
        <nav className='navbar'>
          <div className='imgHolder'>
            <img className='icon' src={Icon} alt="Icon" />
          </div>
          <div className='home'>
            <a href='#'>Home</a>
          </div>
          <div className='info'>
            <a  href='#'>Info</a>
          </div>
          <div className='teste'>
            <a href='#'>Teste</a>
          </div>
        </nav>
  );
}

export default Navbar;
