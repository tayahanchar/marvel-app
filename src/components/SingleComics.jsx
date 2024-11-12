import { Link, useNavigate, useParams } from 'react-router-dom';
import './singleComics.css';
import MarvelService from '../marvelService';
import { useEffect, useState } from 'react';
import './singleComics.css';
import Spinner from './Spinner';

function SingleComics() {
  const params = useParams();
  const [singleComics, setSingleComics] = useState();
  const [loading, setLoading] = useState(true);

  const newService = new MarvelService();
  const changeNavigate = useNavigate();

  useEffect(() => {
    newService.getOneComicsByID(params.id).then(res => {
      setSingleComics(res);
      setLoading(false);
    }).catch(() => {
      changeNavigate('..', {relative: 'path'});
    })
  }, [])

  return (
    loading ? <Spinner /> :
      <div className='single-comics'>
      <img className='single-comics_img' src={singleComics.img} alt="poster" />

      <div className='single-comics_content'>
        <h3>{singleComics.title}</h3>
        <p>{singleComics.description}</p>
        <p>Language: en-us</p>
        <p>{singleComics.price}$</p>
      </div>

      <Link to='../' className='single-comics_link' href="">Back to all</Link>
    </div>
    
  )
}

export default SingleComics;