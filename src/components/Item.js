import React from "react";
import '../components-styles/Item.css';

function Item({id, text, selected, selectItem}){
  return (
    <div 
      className={selected ? 'item-container selected' : 'item-container'}
      onClick={() => selectItem(id)} >
      <div 
        className='item-text'>
        {text}
      </div>
    </div>
  );
}

export default Item;