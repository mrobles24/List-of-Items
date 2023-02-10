import "./App.css";
import grupoVeciLogo from "./images/GRUPOVECI.png";
import ItemsList from "./components/ItemsList";
import React, { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className="application-main">
      <div className="veci-logo-container">
        <img src={grupoVeciLogo} className="veci-logo" alt="logo de veci" />
      </div>
      <div className="items-list-main">
        <h1>List of items</h1>
        <p>
          This is a list of items, they can be added or deleted when selected.
          This is a technical proof task conducted by Front-end department of
          VECI Group Tech .
        </p>
        <div className="items-list-box">
          <ItemsList
            action
            isVisible={isVisible}
            setVisibility={setVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
