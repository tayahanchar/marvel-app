import './RandomCharacter.css';
import MarvelService from '../marvelService';
import { Component } from 'react';
import Spinner from './Spinner';
import Error from './Error';

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

class RandomCharacter extends Component {

  constructor() {
    super();
    this.state = {
      character: {},
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    this.setCharacterData();
  }

  newMarvelService = new MarvelService();

  setCharacterData = () => {
    const randomCharacterId = getRandomIntInclusive(1011400, 1011000);

    this.newMarvelService.getOneCharacterByID(randomCharacterId)
      .then(res => {
        this.setState({character: res});
        this.setState({loading: false})
      })
      .catch(error => {
        this.setState({error: error})
        this.setState({loading: false})
      })
  }
  
  reloadCharacter = () => {
    this.setState({
      character: {},
      error: null,
      loading: true
    });
    this.setCharacterData();
  }

  render() {
    return (
      <div className="random-character_container">
        <div className='random-character'>
          {
            this.state.loading ? 
            <Spinner /> : 
            this.state.error ? 
            <Error /> :
            <>
              <img className='random-character_img' src={this.state.character.img} alt="character" />
              <div className='random-character_descr'>
              <h2 className='random-character_title'>{this.state.character.name}</h2>
              <p className='random-character_p'>{this.state.character.description}</p>
                <button className='random-character_button'><a href={this.state.character.url} target='_blank'>HOMEPAGE</a></button>
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
          <button onClick={this.reloadCharacter} className='random-character_button'>TRY IT</button>
          <img className='decoration' src="../../public/Decoration.png" alt="decoration" />
        </div>
      </div>
    )
  }
  
}

export default RandomCharacter;