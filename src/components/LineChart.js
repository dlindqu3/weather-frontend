import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

function LineChart( props ) { 
    
  // chart.js requires "labels" array and "datasets" array 
  const chartData = {
      labels: ['2022-11-01 18:00:00', '2022-11-01 21:00:00', '2022-11-02 00:00:00', '2022-11-02 03:00:00'],  
      datasets: [{
        label: "Temperature (F)", 
        data: [62.74, 59, 65, 64.5]
    }]
    }
  
  return (
    <div>
      <p>Chart here</p>

    <Line 
      data={chartData}
    /> 

      { props.weatherData && console.log('weatherData from Charts: ', props.weatherData) }
    </div>
  )
}

export default LineChart
