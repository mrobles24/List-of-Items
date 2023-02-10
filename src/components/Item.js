import React, { useState } from "react";
import "../components-styles/Item.css";

function Item({ id = "-1", text = " ", selected = false, selectItem }) {
  const [visible, setVisible] = useState(true);

  // Handler for number of clicks
  const handleClick = (event) => {
    switch (event.detail) {
      case 1:
        selectItem(id);
        break;
      case 2:
        removeItem();
        break;
      default:
        break;
    }
  };

  // Remove an Item's visibility
  const removeItem = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      {visible && (
        <div
          className={selected ? "item-container selected" : "item-container"}
          onClick={handleClick}
        >
          <div className="item-text">{text}</div>
        </div>
      )}
    </div>
  );
}

export default Item;
