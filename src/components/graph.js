import React from "react";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";

const Graph = () => {
  const data = [
    {
      color: "steelblue",
      points: [
        { x: 10, y: 20 },
        { x: 20, y: 40 },
        { x: 30, y: 10 },
        { x: 35, y: 54 },
        { x: 70, y: -30 },
      ],
    },
  ];
  return (
    <div className="graph-container">
      <LineChart
        width={400}
        height={200}
        xLabel="ID"
        yLabel="Votes"
        data={data}
      />
    </div>
  );
};
export default Graph;
