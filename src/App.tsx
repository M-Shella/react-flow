import { Button } from "@mui/material";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  ConnectionLineType,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  Node,
  NodeChange,
  NodeTypes,
  ReactFlowProvider,
  useReactFlow,
  useStoreApi,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./components/CustomNodes/CustomNode";
import Sidebar from "./components/SideBar";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1", color: "black" },
    type: "customNode",
  },
  {
    id: "3",
    position: { x: 0, y: 150 },
    data: { label: "2", color: "black" },
    type: "customNode",
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", type: "step" },
];

const nodeTypes: NodeTypes = { customNode: CustomNode };

let id = 3;

const getId = () => `${id++}`;

function App() {
  const { project } = useReactFlow();

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const onAddNode = (typeOfNode: string) => {
    const id = getId();
    const newNode = {
      id,
      position: project({ x: 10 + Number(id) * 30, y: 50 + Number(id) * 30 }),
      data: { label: `Node ${id}`, color: typeOfNode },
      type: "customNode",
    };
    setNodes((es) => es.concat(newNode));
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar onAddNode={onAddNode} />
      <div
        style={{
          width: "100%",
          height: "100vh",
          // backgroundColor: "red",
        }}
      >
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.Step}
          snapToGrid={true}
          snapGrid={[180, 60]}
          fitView
          minZoom={-Infinity}
          maxZoom={Infinity}
        >
          <MiniMap />
          <Controls />
          <Background
            color="#888"
            lineWidth={2}
            gap={180}
            style={{ backgroundColor: "#a3a0bf" }}
            variant={BackgroundVariant.Lines}
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
