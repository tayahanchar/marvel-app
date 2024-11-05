import './RandomCharacter.css';
import MarvelService from '../marvelService';
import { Component } from 'react';

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

class RandomCharacter extends Component {

  constructor() {
    super();
    this.setCharacterData();

    this.state = {
      character: {}
    }
  }

  newMarvelService = new MarvelService();

  setCharacterData = () => {
    const randomCharacterId = getRandomIntInclusive(1011400, 1011000);

    this.newMarvelService.getOneCharacterByID(randomCharacterId).then(res => {
      this.setState({character: res})
    });

    // this.newMarvelService.getAllCharacters().then(res => console.log(res))
  }


  render() {
    return (
      <div className="random-character_container">
        <div className='random-character'>
          {
            this.state.character.name ? 
            <>
              <img className='random-character_img' src={this.state.character.img} alt="character" />
              <div className='random-character_descr'>
              <h2 className='random-character_title'>{this.state.character.name}</h2>
              <p className='random-character_p'>{this.state.character.description}</p>
                <button className='random-character_button'><a href={this.state.character.url} target='_blank'>HOMEPAGE</a></button>
              </div> 
            </>: 
            <div className='loader-container'>
              <span className="loader"></span>
            </div>
          }
          
        </div>
  
        <div className='random-character_inf'>
          <div>
            <p style={{textAlign: 'left'}}>Random character for today!</p>
            <p>Do you want to get to know him better?</p>
          </div>
          <p>Or choose another one</p>
          <button onClick={this.setCharacterData} className='random-character_button'>TRY IT</button>
        </div>
      </div>
    )
  }
  
}

export default RandomCharacter;