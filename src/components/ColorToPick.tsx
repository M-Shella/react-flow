import { Grid } from "@mui/material";
import React from "react";
import { ColorPick } from "../types";

interface ColorToPickProps {
  color: ColorPick;
  onClick: () => void;
}

const ColorToPick: React.FC<ColorToPickProps> = ({
  color,
  onClick,
}: ColorToPickProps) => {
  return (
    <Grid item xs={2}>
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: color.color,
          border: color.isSelected
            ? "2px solid black"
            : "2px solid transparent",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    </Grid>
  );
};

export default ColorToPick;
