import { Grid, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import { ColorPick } from "../types";
import ColorToPick from "./ColorToPick";

const LineColorPicker: React.FC = () => {
  const theme = useTheme();

  const [colorPicks, setColorPicks] = useState<ColorPick[]>([
    { color: theme.palette.warning.main, isSelected: false },
    { color: theme.palette.error.main, isSelected: false },
    { color: theme.palette.success.main, isSelected: false },
    { color: theme.palette.primary.main, isSelected: false },
    { color: "black", isSelected: false },
  ]);

  return (
    <Grid container gap={2}>
      {colorPicks.map((colorPick) => (
        <ColorToPick
          color={colorPick}
          onClick={() => {
            setColorPicks(
              colorPicks.map((color) => {
                if (color.color === colorPick.color) {
                  return { ...color, isSelected: true };
                } else {
                  return { ...color, isSelected: false };
                }
              })
            );
          }}
        />
      ))}
    </Grid>
  );
};

export default LineColorPicker;
