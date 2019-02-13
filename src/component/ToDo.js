import React from "react";
function ToDo(props) {
  return (
    <div style={{ backgroundColor: "purple" }}>
      <div style={{ margin: "20px", backgroundColor: "white" }}>
        <h2>
          <input type="checkbox" />
          {props.item.name}
        </h2>
      </div>
    </div>
  );
}

export default ToDo;
