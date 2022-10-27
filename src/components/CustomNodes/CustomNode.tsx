import { Typography } from "@mui/material";
import React from "react";
import { Handle, Node, NodeProps, Position } from "reactflow";

type UseShapeOptions = {
  type: string;
  width: number;
  height: number;
  color: string;
  selected: boolean;
};

function CustomNode({ data }: NodeProps) {
  return (
    <div
      style={{
        height: "50px",
        width: "170px",
        border: "3px solid " + data.color,
        borderRadius: "6px",
        padding: "5px",
        background: "white",
        boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.5)",
      }}
    >
      <Handle type="target" position={Position.Left} />
      <Typography variant="h6" textAlign="center">
        {data.label}
      </Typography>
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  );
}

export default CustomNode;

// import React, { useState, DragEvent } from "react";
// import { Handle, NodeProps, Position } from "reactflow";
// import cx from "classnames";

// import "../styles.css";

// function CustomNode({ data, sourcePosition, targetPosition }: NodeProps) {
//   const [isDropzoneActive, setDropzoneActive] = useState<boolean>(false);

//   const onDrop = () => {
//     setDropzoneActive(false);
//   };

//   const onDragOver = (evt: DragEvent<HTMLDivElement>) => {
//     evt.preventDefault();
//   };

//   const onDragEnter = () => {
//     setDropzoneActive(true);
//   };

//   const onDragLeave = () => {
//     setDropzoneActive(false);
//   };

//   const className = cx("node", {
//     ["nodeDropzone"]: isDropzoneActive,
//   });

//   return (
//     <div
//       className={className}
//       onDrop={onDrop}
//       onDragOver={onDragOver}
//       onDragEnter={onDragEnter}
//       onDragLeave={onDragLeave}
//     >
//       <Handle
//         className="handle"
//         type="target"
//         position={targetPosition || Position.Top}
//       />
//       <Handle
//         className="handle"
//         type="source"
//         position={sourcePosition || Position.Bottom}
//       />
//       {data.label}
//     </div>
//   );
// }

// export default CustomNode;
