import MarvelService from '../marvelService';
import Spinner from './Spinner';
import Error from './Error';
import CharacterCard from "./CharacterCard";
import './characterList.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function CharactersList(props) {
  
  const [charactersList, setCharactersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(10);


  const newMarvelService = new MarvelService();

  useEffect(() => {
    newMarvelService.getAllCharacters().then(res => {
      setCharactersList(res)
      setLoading(false)
    }).catch((error) => {
      setError(error);
      setLoading(false)
    })
  }, [])

  const loadMoreCharacters = () => {
    setOffset((prev) => prev + 9);
    setLoading(true);
    newMarvelService.getAllCharacters(offset).then(res => {
      setCharactersList((prev) => [...prev, ...res])
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    })
  }

    return(
      <div className="characters-list_wrapper">
        <ul className="characters-list">
          { 
          error ? <Error /> :
          charactersList.map(character => <CharacterCard choseActiveCharacter={props.choseActiveCharacter} key={character.id} {...character}></CharacterCard>)}
        </ul>
        { loading ? <Spinner /> :
        offset < 1564 && <button onClick={loadMoreCharacters} className="characters-list_button">LOAD MORE</button>}
      </div>
    )
}

CharactersList.propTypes = {
    choseActiveCharacter: PropTypes.func.isRequired
  }

export default CharactersList;