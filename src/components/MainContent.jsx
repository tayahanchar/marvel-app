
import { Component } from 'react';
import ActiveCharacter from './ActiveCharacter';
import CharactersList from './CharactersList';
import './mainContent.css';
import SelectCharacter from './SelectCharacter';
import MarvelService from '../marvelService';
import Error from './Error';

class MainContent extends Component {

  constructor() {
    super();

    this.state = {
      mainCharacterId: null,
      character: {},
      error: false,
    }
  }

  newMarvelService = new MarvelService();

  choseActiveCharacter = (id) => {
    this.newMarvelService.getOneCharacterByID(id)
    .then(result => {
      this.setState({mainCharacterId: id});
      this.setState({character: result});
    }).catch((error) => this.setState({error: error}))
  }

  render() {
    return (
      <div className='main-content'>
          <CharactersList choseActiveCharacter={this.choseActiveCharacter} />
          { this.state.mainCharacterId ?
            <ActiveCharacter {...this.state.character} error={this.state.error} /> :
            this.state.error ?
            <Error /> :
            <SelectCharacter />
          }
      </div>
    )
  }

}
export default MainContent;