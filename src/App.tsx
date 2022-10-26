import React from "react";
import CustomNode from "./components/CustomNode";
import Flow from "./components/Flow";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          width: "600px",
          height: "600px",
          margin: "auto",
          border: "1px solid",
        }}
      >
        <Flow />
      </div>
      {/* <CustomNode /> */}
    </div>
  );
}

export default App;
