import './Header.css';

function Header() {

  return (
    <header className='header'>
      <h1 className='header_title'><span className='header_title__red'>Marvel</span> information portal</h1>
      <nav>
        <ul className='header_navlist'>
          <li className='active-page'>Characters</li>
          <span> / </span>
          <li>Comics</li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;