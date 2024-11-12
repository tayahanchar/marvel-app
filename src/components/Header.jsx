import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className='header'>
      <h1 className='header_title'><span className='header_title__red'>Marvel</span> information portal</h1>
      <nav>
        <div className='header_navlist'>
          <NavLink to='.' end className={({isActive}) => isActive ? 'active-page' : null}>Characters</NavLink>
          <span> / </span>
          <NavLink to='comics' className={({isActive}) => isActive ? 'active-page' : null}>Comics</NavLink>
        </div>
      </nav>
    </header>
  )

}

export default Header;