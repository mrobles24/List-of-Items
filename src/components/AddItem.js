import React, {useState} from 'react';
import '../components-styles/AddItem.css';
import {v4 as uuidv4} from 'uuid';

function AddItem(props) {

  const [input, setInput] = useState('');

  // Set input text value
  const manageChange = e => {
    setInput(e.target.value);
  }

  // Create and send a new item to the list
  const manageSend = e => {
    e.preventDefault();
    
    const newItem = {
      id: uuidv4(),
      text: input,
      selected: false
    }

    props.onSubmit(newItem);
  }


  return(
    <div className='add-items-main'>
      <p className='modal-paragraf'>Add item to list</p>
      <form className='item-form'>
        <input
          className='item-input'
          type='text'
          placeholder='Type the text here...'
          name='text'
          onChange={manageChange}
        />
      </form>
      <div className='add-items-buttons-container'>
        <button onClick={manageSend} className='generic-button add'>ADD</button>
        <button className='generic-button'>CANCEL</button>
      </div>
    </div>
  )
}

export default AddItem;