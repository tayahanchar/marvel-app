
import './characterCard.css';
import PropTypes from 'prop-types';

function CharacterCard({id, img, name, choseActiveCharacter}) {
    return (
      <li className="character-card" data-character={id} onClick={() => choseActiveCharacter(id)}>
        <img className="character-card_img" src={img} alt="character" />
        <h3 className="character-card_name">{name}</h3>
      </li>
    )
}

CharacterCard.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
    choseActiveCharacter: PropTypes.func
  }

export default CharacterCard;