import { Component } from "react";
import './characterCard.css';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="character-card" data-character={this.props.id} onClick={() => this.props.choseActiveCharacter(this.props.id)}>
        <img className="character-card_img" src={this.props.img} alt="character" />
        <h3 className="character-card_name">{this.props.name}</h3>
      </li>
    )
  }
}

export default CharacterCard;