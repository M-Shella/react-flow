import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {},
    type: "customNode",
  },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const edges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = { customNode: CustomNode };

const Flow = () => {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flow;
