import React from "react";


const AddItem = ({ input, setInput, addItem }) => {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem} style={{ marginLeft: "10px" }}>Add</button>
    </div>
  );
};

export default AddItem;
