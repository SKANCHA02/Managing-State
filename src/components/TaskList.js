import React from "react";

const TaskList = ({ list, deleteItem }) => {
  return (
    <div>
      <h2> List of items</h2>
      {list.map((item, i) => (
        <ul>
          <li>
            {item}
            <button onClick={() => deleteItem(i)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TaskList;
