import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <form>
        <h2>Add Item</h2>
        <input
          placeholder="Add TODO .."
          type="text"
          value={item}
          onChange={handleChange}
        />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(item);
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
