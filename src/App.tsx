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
  MarkerType,
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
import CustomConnectionLine from "./components/CustomConnectionLine";

const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];

const nodeTypes: NodeTypes = { customNode: CustomNode };

let id = 1;

const getId = () => `${id++}`;

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "black" },
  type: "step",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

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
      position: project({ x: 0, y: Number(id) * 70 }),
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
        }}
      >
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionLineComponent={CustomConnectionLine}
          defaultEdgeOptions={defaultEdgeOptions}
          snapToGrid={true}
          snapGrid={[180, 60]}
          minZoom={-Infinity}
          maxZoom={Infinity}
        >
          <MiniMap />
          <Controls />
          <Background
            color="#888"
            lineWidth={2}
            gap={180}
            style={{ backgroundColor: "#eeeeee" }}
            variant={BackgroundVariant.Lines}
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
