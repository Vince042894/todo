import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function AddItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>To-Do</h1>
        <div className="input-data">
          <input onChange={handleChange} value={inputText} type="text"></input>
          <button>
            <span onClick={AddItem}>Add</span>
          </button>
        </div>
        <div className="addItem">
          <ul>
            {items.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
