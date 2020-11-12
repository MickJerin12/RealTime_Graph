import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ chartData }) => {
  return (
    <div>
      <Line
        data={chartData}
        responsive={true}
        maintainAspectRatio={false}
        options={{
          title: {
            display: "Test Graph",
            fontSize: 25,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawTicks: false,
                  color: ["rgb(0, 0, 0)"],
                },
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: ["rgb(0, 0, 0)"],
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 100,
                },
              },
            ],
          },
          animation: {
            duration: 0,
          },
          hover: {
            animationDuration: 0,
          },
          responsiveAnimationDuration: 0,
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          elements: {
            point: {
              radius: 0,
            },
            //   line: {
            //     tension: 0
            // }
          },
        }}
      />
    </div>
  );
};

export default Chart;
