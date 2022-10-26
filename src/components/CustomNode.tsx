import React from "react";
import { Handle, Position, useStoreApi } from "reactflow";

const CustomNode = () => {
  const handleStyle = { left: 10 };

  return (
    <div
      style={{
        height: "80px",
        width: "80px",
        border: "1px solid",
        padding: "5px",
        // borderRadius: "50%",
        background: "white",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <Handle type="target" position={Position.Top} style={handleStyle} />
      {/* <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" />
      </div> */}
      <button
        style={{ marginTop: "30px", marginLeft: "5px" }}
        onClick={() => console.log("test")}
      >
        Click me
      </button>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        // style={handleStyle}
      />
    </div>
  );
};

export default CustomNode;
