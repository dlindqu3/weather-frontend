import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function LineChart( props ) {

  // let testData = {
  //   labels: [1,2,3,4,5],
  //     datasets: [
  //       {
  //         label: "Temperature (F)",
  //         data: [20, 30, 35, 50, 40],
  //       },
  //     ],
  // }

  return (
    <div>
      <div style={{ width: 650 }}>
      {props.weatherData && <Line data={props.weatherData}/> }
      </div>
    </div>
  );
}

export default LineChart;
