import { useState } from "react";

export default function InputArea(props) {
  const [toDo, setToDo] = useState("");

  function handelChange(event) {
    setToDo(event.target.value);
  }

  return (
    <div className="form">
      <input type="text" value={toDo} onChange={handelChange} />
      <button
        onClick={() => {
          props.addItem(toDo);
          setToDo("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
