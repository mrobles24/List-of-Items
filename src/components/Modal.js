import React, { useState } from "react";
import "../components-styles/Modal.css";
import { v4 as uuidv4 } from "uuid";

function Modal(props) {
  const [input, setInput] = useState("");

  // Set input text value
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Create and send a new item to the list
  const handleSend = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuidv4(),
      text: input,
      selected: false,
    };

    props.onSubmit(newItem);
  };

  return (
    <div className="modal">
      <div className="add-items-main">
        <p className="modal-paragraf">Add item to list</p>
        <form className="item-form" onSubmit={handleSend}>
          <input
            className="item-input"
            type="text"
            placeholder="Type the text here..."
            name="text"
            value={input}
            onChange={handleChange}
          />
        </form>
        <div className="add-items-buttons-container">
          <button onClick={handleSend} className="generic-button add">
            ADD
          </button>
          <button
            className="generic-button"
            onClick={() => props.closeModal(false)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
