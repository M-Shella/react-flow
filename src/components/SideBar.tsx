// import React, { DragEvent } from "react";
// import "./styles.css";

// const SideBar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebarLabel">
//         You can drag nodes from the sidebar and drop them on another node
//       </div>
//       <div>
//         <div draggable className="sidebarNode">
//           Node A
//         </div>
//         <div draggable className="sidebarNode">
//           Node B
//         </div>
//         <div draggable className="sidebarNode">
//           Node C
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import { Button, Stack } from "@mui/material";
import React, { DragEvent } from "react";

import "../styles.css";

interface SideBarProps {
  onAddNode: (typeOfNode: string) => void;
}

function Sidebar({ onAddNode }: SideBarProps) {
  return (
    <div className="sidebar">
      <Stack spacing={1}>
        <Button
          variant="contained"
          fullWidth
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => onAddNode("yellow")}
        >
          + Orange box
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "red", color: "black" }}
          fullWidth
          onClick={() => onAddNode("red")}
        >
          + Red box
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => onAddNode("green")}
        >
          + Green box
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "blue", color: "white" }}
          fullWidth
          onClick={() => onAddNode("blue")}
        >
          + Blue box
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => onAddNode("black")}
        >
          + Black box
        </Button>
      </Stack>
    </div>
  );
}

export default Sidebar;
