import React from "react";
import { Button, Stack, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  nodeColor: string;
  onAddNode: (typeOfNode: string) => void;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
      }}
      fullWidth
      onClick={() => props.onAddNode(props.nodeColor)}
      {...props}
    >
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <div>{props.children}</div>

        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: props.nodeColor,
          }}
        />
      </Stack>
    </Button>
  );
};

export default CustomButton;
