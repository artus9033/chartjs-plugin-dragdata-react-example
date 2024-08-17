import "./App.css";

import Chart from "chart.js/auto";
import ChartJSDragDataPlugin from "chartjs-plugin-dragdata";
import React from "react";
import { Line } from "react-chartjs-2";

Chart.register(ChartJSDragDataPlugin);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Line
          data={{
            datasets: [
              {
                data: [
                  {
                    x: 1,
                    y: 2,
                  },
                  {
                    x: 2,
                    y: 4,
                  },
                  {
                    x: 3,
                    y: 6,
                  },
                  {
                    x: 4,
                    y: 10.2,
                  },
                ],
                label: "D1",
              },
              {
                data: [
                  {
                    x: 1,
                    y: -2,
                  },
                  {
                    x: 2,
                    y: 7,
                  },
                  {
                    x: 3,
                    y: 9,
                  },
                  {
                    x: 4,
                    y: 3,
                  },
                ],
                label: "D2",
              },
            ],
          }}
          options={{
            scales: {
              x: { type: "linear", min: 0, max: 5 },
              y: { min: -4, max: 12 },
            },
            plugins: {
              dragData: {
                onDrag(event, di, index, value) {
                  console.log("drag", { event, di, index, value });
                },
                onDragEnd(event, di, index, value) {
                  console.log("drag end", { event, di, index, value });
                },
                onDragStart(event, di, index, value) {
                  console.log("drag start", { event, di, index, value });
                },
              },
            },
          }}
        />
      </header>
    </div>
  );
}

export default App;
