import './RandomCharacter.css';
import MarvelService from '../marvelService';
import Spinner from './Spinner';
import Error from './Error';
import { useEffect, useState } from 'react';

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function RandomCharacter() {

  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const newMarvelService = new MarvelService();

  useEffect(() => {
    setCharacterData();
  }, [])

  const setCharacterData = () => {
    const randomCharacterId = getRandomIntInclusive(1011400, 1011000);

    newMarvelService.getOneCharacterByID(randomCharacterId)
      .then(res => {
        setCharacter(res);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      })
  }
  
  const reloadCharacter = () => {
    setError(null);
    setLoading(true)
    setCharacterData();
  }

    return (
      <div className="random-character_container">
        <div className='random-character'>
          {
            loading ? 
            <Spinner /> : 
            error ? 
            <Error /> :
            <>
              <img className='random-character_img' src={character.img} alt="character" />
              <div className='random-character_descr'>
              <h2 className='random-character_title'>{character.name}</h2>
              <p className='random-character_p'>{character.description}</p>
                <button className='random-character_button'><a href={character.url} target='_blank'>HOMEPAGE</a></button>
              </div> 
            </> 
          }
        </div>
  
        <div className='random-character_inf'>
          <div>
            <p style={{textAlign: 'left'}}>Random character for today!</p>
            <p>Do you want to get to know him better?</p>
          </div>
          <p>Or choose another one</p>
          <button onClick={reloadCharacter} className='random-character_button'>TRY IT</button>
          <img className='decoration' src="../../public/Decoration.png" alt="decoration" />
        </div>
      </div>
    )
}

export default RandomCharacter;