import { Component } from "react";
import MarvelService from '../marvelService';
import Spinner from './Spinner';
import Error from './Error';
import CharacterCard from "./CharacterCard";
import './characterList.css';

class CharactersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charactersList: {},
      loading: true,
      error: null,
      offset: 10
    }
  }

  newMarvelService = new MarvelService();

  componentDidMount() {
    this.newMarvelService.getAllCharacters().then(res => {
      this.setState({charactersList: res});
      this.setState({loading: false});
    }).catch((error) => this.setState({error: error, loading: false}))
  }

  loadMoreCharacters = () => {
    this.setState((prev) => {
      return {offset: prev.offset + 9}
    })
    this.newMarvelService.getAllCharacters(this.state.offset).then(res => {
      this.setState((prev) => {
        console.log([...prev.charactersList, ...res])
        return {charactersList: [...prev.charactersList, ...res]}
      });
      this.setState({loading: false});
    }).catch((error) => this.setState({error: error, loading: false}))
  }

  render() {
    return(
      <div className="characters-list_wrapper">
        <ul className="characters-list">
          {this.state.loading ? <Spinner /> : 
          this.state.error ? <Error /> :
          this.state.charactersList.map(character => <CharacterCard choseActiveCharacter={this.props.choseActiveCharacter} key={character.id} {...character}></CharacterCard>)}
        </ul>
        {this.state.offset < 1564 && <button onClick={this.loadMoreCharacters} className="characters-list_button">LOAD MORE</button>}
      </div>
    )
  }
}

export default CharactersList;