import React, { Component } from "react";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";

export default class App extends Component {
  render() {
    const data = [
      {
        color: "steelblue",
        points: [
          { x: 10, y: 20 },
          { x: 20, y: 40 },
          { x: 30, y: 50 },
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
  }
}
