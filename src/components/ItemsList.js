import React, { useState, useRef } from "react";
import "../components-styles/ItemsList.css";
import Item from "./Item";
import Modal from "./Modal";
import { BsArrowCounterclockwise } from "react-icons/bs";

function ItemsList({ action, isVisible, setVisibility }) {
  const [items, setItems] = useState([]);
  const previousValue = useRef(items);

  // Add item to list if it's got text
  const addItem = (item) => {
    if (item.text.trim()) {
      item.text = item.text.trim();
      const nextItems = [...items, item];
      setItems(nextItems);
    }
    previousValue.current = items;
  };

  // Select or unselect an item from the list
  const selectItem = (id) => {
    const nextItems = items.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setItems(nextItems);
  };

  // Delete item from list using button
  const deleteItem = () => {
    const nextItems = items.filter((item) => item.selected === false);
    setItems(nextItems);
    previousValue.current = items;
  };

  // Restore latest state
  const restoreItems = () => {
    setItems(previousValue.current);
  };

  return (
    <>
      {isVisible && (
        <Modal onSubmit={addItem} closeModal={() => setVisibility(false)} />
      )}

      <div className="items-list-container">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            text={item.text}
            selected={item.selected}
            selectItem={selectItem}
          />
        ))}
      </div>
      <div className="items-buttons-container">
        <button className="generic-button reload" onClick={restoreItems}>
          <div className="item-icon-container">
            <BsArrowCounterclockwise className="item-icon" />
          </div>
        </button>
        <button className="generic-button" onClick={deleteItem}>
          DELETE
        </button>
        <button
          className="generic-button add item"
          onClick={() => setVisibility(true)}
        >
          ADD
        </button>
      </div>
    </>
  );
}

export default ItemsList;
