import React, {useState} from 'react';
import '../components-styles/ItemsList.css';
import Item from './Item';
import AddItem from './AddItem';
import {BsArrowCounterclockwise} from "react-icons/bs";

function ItemsList(){

  const [items, setItems]= useState([]);

  // Add item to list if it's got text
  const addItem = item => {
    if(item.text.trim()){
      item.text = item.text.trim();
      const updatedItems = [...items, item];
      setItems(updatedItems);
    }
  }

  // Select or unselect an item from the list
  const selectItem = id =>{
    const updatedItems = items.map(item => {
      if(item.id === id){
        item.selected = !item.selected;
      }
      return item;
    });
    setItems(updatedItems);
  }

  // Delete item from list using button
  const deleteItem = () =>{
    const updatedItems = items.filter(item => item.selected === false);
    setItems(updatedItems);
  }

  return(
    <>
      <div className='items-list-container'>
        {
          items.map((item)=>
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              selected={item.selected}
              selectItem={selectItem} />
          )
        }
      </div>

      <div className='items-buttons-container'>
        <button className='item-button reload'>
          <div className='item-icon-container'>
            <BsArrowCounterclockwise className='item-icon' />
          </div>
        </button>
        <button className='item-button' onClick={deleteItem}>DELETE</button>
        <button className='item-button add'>ADD</button>
      </div>

      <AddItem onSubmit={addItem} />
    </>
  );
}

export default ItemsList;