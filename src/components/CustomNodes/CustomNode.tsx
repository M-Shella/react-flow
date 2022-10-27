import { IconButton, Popover, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import { Handle, Node, NodeProps, Position } from "reactflow";
import ElementMaker from "../ElementMaker";
import EditIcon from "@mui/icons-material/Edit";

function CustomNode({ data }: NodeProps) {
  const [showInputEle, setShowInputEle] = useState(false);
  const [value, setValue] = useState(data.label);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div
      style={{
        height: "44px",
        width: "164px",
        border: "3px solid " + data.color,
        borderRadius: "6px",
        padding: "5px",
        background: "white",
        boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.5)",
      }}
    >
      <Handle type="target" position={Position.Left} />
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <ElementMaker
          value={value}
          handleChange={(e) => setValue(e.target.value)}
          handleDoubleClick={() => setShowInputEle(true)}
          handleBlur={() => setShowInputEle(false)}
          showInputEle={showInputEle}
        />
        <IconButton size="small" onClick={handleClick}>
          <EditIcon />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>TODO information about Node</Typography>
        </Popover>
      </Stack>

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
