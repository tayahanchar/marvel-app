import './selectCharacter.css';

function SelectCharacter() {
  return (
    <div className='select-character'>
      <h4 className='select-character_title'>Please select a character to see information</h4>
      <div className='select-character_empty-group'>
        <div className='select-character_empty-circle'></div>
        <div className='select-character_empty-line'></div>
      </div>
      <div className='select-character_empty-text-field'></div>
      <div className='select-character_empty-text-field'></div>
      <div className='select-character_empty-text-field'></div>
    </div>
  )
}

export default SelectCharacter;