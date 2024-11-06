import { Component } from 'react';
import './activeCharacter.css';

class ActiveCharacter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='active-character'>
        <div className='active-character_header'>
          <img className='active-character_img' src={this.props.img} alt="character" />
          <div className='active-character_inf'>
            <h3 className='active-character_name'>{this.props.name}</h3>
            <button className='active-character_button'><a target='_blank' className='active-character_link' href={this.props.url}>HOMEPAGE</a></button>
          </div>
        </div>
        <p className='active-character_descr'>{this.props.description}</p>
        <h4 className='comics-title'>Comics:</h4>
        <ul className='comics-list'>
          {this.props.comics.map((item, i) => <li key={i} className='comics-item'>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default ActiveCharacter;