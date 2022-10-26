import React from "react";
import { Handle, Position } from "reactflow";

const CustomNode = () => {
  const handleStyle = { left: 10 };

  return (
    <div
      style={{
        height: "80px",
        width: "80px",
        border: "1px solid",
        padding: "5px",
        borderRadius: "50%",
        background: "white",
      }}
    >
      <Handle type="target" position={Position.Top} />
      {/* <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" />
      </div> */}
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
