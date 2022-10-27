import { Input, Typography } from "@mui/material";
import React from "react";

const ElementMaker = ({
  value,
  handleChange,
  handleDoubleClick,
  handleBlur,
  showInputEle,
}: {
  value: string;
  handleChange: (e: any) => void;
  handleDoubleClick: () => void;
  handleBlur: () => void;
  showInputEle: boolean;
}) => {
  return (
    <span>
      {showInputEle ? (
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleBlur();
            }
          }}
          autoFocus
        />
      ) : (
        <Typography
          variant="body1"
          textAlign="center"
          onDoubleClick={handleDoubleClick}
        >
          {value}
        </Typography>
      )}
    </span>
  );
};

export default ElementMaker;
