import React, { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";

const App = () => {
  const [chartData, setChartData] = useState({
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "Temperature",
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        borderColor: ["rgba(44, 130, 201, 1)"],
        backgroundColor: ["rgba(173,216,230, 0.8)"],
      },
    ],
  });

  setTimeout(() => {
    const cloneChartData = { ...chartData };
    const cloneData = [...chartData.datasets[0].data];
    cloneData.shift();
    cloneData.push(Math.floor(Math.random() * 90 + 0));
    cloneChartData.datasets[0].data = cloneData;
    setChartData(cloneChartData);
  }, 500);

  return (
    <div className="App">
      <Chart
        chartData={chartData}
        location="Massachusetts"
        legendPosition="bottom"
      />
    </div>
  );
};

export default App;
