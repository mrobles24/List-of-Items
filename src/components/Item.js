import React, { useState } from "react";
import '../components-styles/Item.css';

function Item({id, text, selected, selectItem}){

  const [visible, setVisible] = useState(true);

  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        selectItem(id)
        break;
      case 2:
        removeElement()
        break;
      default:
        break;
      
    }
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
  }

  return (
    <div>
      {visible && (
        <div 
          className={selected ? 'item-container selected' : 'item-container'}
          onClick={handleClick}>
          <div 
           className='item-text'>
           {text}
          </div>
        </div>
        )}
    </div>
  );
}

export default Item;