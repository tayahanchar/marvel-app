import './RandomCharacter.css';

function RandomCharacter() {
  return (
    <div className="random-character_container">
      <div className='random-character'>
        <img src="../../public/Thumbnail.jpg" alt="character" />
        <div className='random-character_descr'>
          <h2 className='random-character_title'>THOR</h2>
          <p className='random-character_p'>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he is quite smart and compassionate...</p>
          <div>
            <button className='random-character_button'>HOMEPAGE</button>
            <button className='random-character_button'>WIKI</button>
          </div>
        </div>
      </div>

      <div className='random-character_inf'>
        <div>
          <p style={{textAlign: 'left'}}>Random character for today!</p>
          <p>Do you want to get to know him better?</p>
        </div>
        <p>Or choose another one</p>
        <button className='random-character_button'>TRY IT</button>
      </div>
    </div>
  )
}

export default RandomCharacter;