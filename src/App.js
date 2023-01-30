import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [listItems, setListItems] = useState([]);

  function handelChange(event) {
    setToDo(event.target.value);
  }

  function handelSubmit() {
    setListItems((prevValue) => {
      return [...prevValue, toDo];
    });
    setToDo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={toDo} onChange={handelChange} />
        <button onClick={handelSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
