
import './activeCharacter.css';
import PropTypes from 'prop-types';

function ActiveCharacter(props) {
    return (
        <div className='active-character'>
        <div className='active-character_header'>
          <img className='active-character_img' src={props.img} alt="character" />
          <div className='active-character_inf'>
            <h3 className='active-character_name'>{props.name}</h3>
            <button className='active-character_button'><a target='_blank' className='active-character_link' href={props.url}>HOMEPAGE</a></button>
          </div>
        </div>
        <p className='active-character_descr'>{props.description}</p>
        <h4 className='comics-title'>Comics:</h4>
        <ul className='comics-list'>
          {props.comics.map((item, i) => <li key={i} className='comics-item'>{item.name}</li>)}
        </ul>
      </div>
    )
}

ActiveCharacter.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  comics: PropTypes.array,
  url: PropTypes.string
}

export default ActiveCharacter;