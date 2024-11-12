import { useEffect, useState } from 'react';
import MarvelService from '../marvelService';
import './comicsPage.css';
import Spinner from './Spinner';
import Error from './Error';


function ComicsPage() {
  const newService = new MarvelService;
  const [comicsList, setComicsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    newService.getAllComics()
    .then(res =>{
      setComicsList(res);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    })
  }, []);

  const openMoreComics = () => {
    setLoading(true)
    newService.getAllComics(offset)
    .then(res =>{
      setComicsList(prev => [...prev, ...res]);
      setLoading(false);
      setOffset((prev) => prev + 10)
    })
    .catch(error => {
      setError(error);
    })
  }

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

      { error ? <Error /> :
      <>
        <ul className='comics-page-list'>
          {comicsList.map((comics, i) => {
            return (
              <li className='comics-page-item' key={comics.id + i}>
                <img className='comics-item_img' src={comics.img} alt="comics" />
                <h4 className='comics_title'>{comics.title}</h4>
                <p>{comics.price? `${comics.price}$` : 'not available'}</p>
              </li>
              )
          })}
        </ul>
        {loading ? <Spinner /> : 
        <button onClick={openMoreComics} className='comics_button'>LOAD MORE</button>
        }
      </>
      }

    </div>
  )
}

export default ComicsPage;