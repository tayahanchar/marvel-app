import './comicsPage.css';


function ComicsPage() {
  return (
    <div>
      <div className='comics_poster'>
        <img src="../../public/Avengers.png" alt="avengers" />
        <div>
          <p>New comics every week!</p>
          <p>Stay tuned!</p>
        </div>
        <img src="../../public/Avengers-logo.png" alt="avengers" />
      </div>

      <ul className='comics-page-list'>
        <li className='comics-item'>
          <img className='comics-item_img' src="" alt="comics" />
          <h4>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
          <p>9.99$</p>
        </li>
        <li className='comics-item'>
          <img className='comics-item_img' src="" alt="comics" />
          <h4>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
          <p>9.99$</p>
        </li>
        <li className='comics-item'>
          <img className='comics-item_img' src="" alt="comics" />
          <h4>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
          <p>9.99$</p>
        </li>
        <li className='comics-item'>
          <img className='comics-item_img' src="" alt="comics" />
          <h4>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
          <p>9.99$</p>
        </li>
        <li className='comics-item'>
          <img className='comics-item_img' src="" alt="comics" />
          <h4>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
          <p>9.99$</p>
        </li>
      </ul>

      <button className='comics_button'>LOAD MORE</button>
    </div>
  )
}

export default ComicsPage;