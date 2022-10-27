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

import { Button, Stack, Typography, useTheme } from "@mui/material";
import React, { DragEvent } from "react";

import "../styles.css";
import CustomButton from "./CustomButton";
import LineColorPicker from "./LineColorPicker";

interface SideBarProps {
  onAddNode: (typeOfNode: string) => void;
}

function Sidebar({ onAddNode }: SideBarProps) {
  const theme = useTheme();
  return (
    <div className="sidebar">
      <Stack spacing={2}>
        <Typography variant="h5" color="black">
          Boxes
        </Typography>
        <CustomButton
          nodeColor={theme.palette.warning.main}
          onAddNode={onAddNode}
        >
          Orange box
        </CustomButton>
        <CustomButton
          nodeColor={theme.palette.error.main}
          onAddNode={onAddNode}
        >
          Red box
        </CustomButton>
        <CustomButton
          nodeColor={theme.palette.success.main}
          onAddNode={onAddNode}
        >
          Green box
        </CustomButton>
        <CustomButton
          nodeColor={theme.palette.primary.main}
          onAddNode={onAddNode}
        >
          Blue box
        </CustomButton>
        <CustomButton nodeColor="black" onAddNode={onAddNode}>
          Black box
        </CustomButton>
        <Typography variant="h5" color="black">
          Lines
        </Typography>
        <Typography variant="body1" color="black">
          Color (TODO)
        </Typography>
        <LineColorPicker />
        <Typography variant="body1" color="black">
          Shape (TODO)
        </Typography>
      </Stack>
    </div>
  );
}

export default Sidebar;
