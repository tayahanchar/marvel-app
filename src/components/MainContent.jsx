import ActiveCharacter from './ActiveCharacter';
import CharactersList from './CharactersList';
import './mainContent.css';
import SelectCharacter from './SelectCharacter';
import MarvelService from '../marvelService';
import Error from './Error';
import { useState } from 'react';


function MainContent() {

  const [mainCharacterId, setMainCharacterId] = useState(null);
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(false);

  const newMarvelService = new MarvelService();

  const choseActiveCharacter = (id) => {
    newMarvelService.getOneCharacterByID(id)
    .then(result => {
      setMainCharacterId(id)
      setCharacter(result)
    }).catch((error) => setError(error))
  }

    return (
      <div className='main-content'>
          <CharactersList choseActiveCharacter={choseActiveCharacter} />
          { mainCharacterId ?
            <ActiveCharacter {...character} error={error} /> :
            error ?
            <Error /> :
            <SelectCharacter />
          }
      </div>
    )
}
export default MainContent;