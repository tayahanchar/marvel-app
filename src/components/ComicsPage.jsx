import { useEffect, useState } from 'react';
import MarvelService from '../marvelService';
import './comicsPage.css';
import Spinner from './Spinner';
import Error from './Error';
import { useNavigate } from 'react-router-dom';

function ComicsPage() {
  const newService = new MarvelService;
  const [comicsList, setComicsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(10);
  const [newNav, setNewNav] = useState(false);
  const changeLocation = useNavigate();

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

  useEffect(() => {
    changeLocation(newNav, {relative: 'path'})
  }, [newNav])

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

  const openSingleComics = (event) => {
    setNewNav(event.target.closest('.comics-page-item').dataset.id)
  }

  return (
    <div>
      { error ? <Error /> :
      <>
        <ul onClick={(e) => openSingleComics(e)} className='comics-page-list'>
          {comicsList.map((comics, i) => {
            return (
              <li className='comics-page-item' key={comics.id + i} data-id={comics.id}>
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