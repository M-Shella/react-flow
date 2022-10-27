import React from "react";
import { ConnectionLineComponentProps, getStraightPath } from "reactflow";

function CustomConnectionLine({
  fromX,
  fromY,
  toX,
  toY,
}: ConnectionLineComponentProps) {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path fill="none" stroke="#222" strokeWidth={3} d={edgePath} />
      <circle
        cx={toX}
        cy={toY}
        fill="black"
        r={3}
        stroke="black"
        strokeWidth={3}
      />
    </g>
  );
}

export default CustomConnectionLine;
