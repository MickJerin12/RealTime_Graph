import React from 'react';
import { Line} from 'react-chartjs-2';

const Chart =({chartData})=>{

    return (
<div>
        <Line
          data={chartData}
          options={{
            title:{
              display:"Test Graph",
              fontSize:25
            },
            scales: {
              xAxes: [{
                  ticks: {
                      display: false 
                  }
              }],
              yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }]
          },
          animation: {
            duration: 0
        },
        hover: {
          animationDuration: 0
      },
      responsiveAnimationDuration: 0,
    legend: {
      display: false
   },
   tooltips: {
      enabled: false
   },
      elements: {
        point:{
          radius: 0
      },
     
    }
          }}
        />
      </div>
    )
}

export default Chart;
