import React, { useState } from "react";
import { Line } from "react-chartjs-2";


function LineChart( props ) {


  const [chartData, setChartData] = useState()

  let populateData = (weatherData) => {
    let dates = []
    let temps = []
    for (let i = 0; i < weatherData.length; i++) {
      dates.push(weatherData[i][2]);
      temps.push(weatherData[i][1]);
    }
    // chart.js requires "labels" array and "datasets" array
    const newChartData = {
      labels: dates,
      datasets: [
        {
          label: "Temperature (F)",
          data: temps,
        },
      ],
    }
    console.log('newChartData: ', newChartData)
    setChartData(newChartData)
  }



  // let populateData = () => {
  //   let dates = [];
  //   let temps = [];
  //   for (let i = 0; i < props.weatherData.length; i++) {
  //     dates.push(weatherData[i][2]);
  //     temps.push(weatherData[i][1]);
  //   }
  //   setDates(dates);
  //   setTemps(temps);
  // };

  return (
    <div>
      <p>Chart here</p>

      { props.weatherData &&
        console.log("weatherData from Charts: ", props.weatherData) }

      { props.weatherData && populateData(props.weatherData) }

      {/* this works */}
      { chartData && console.log('we have chartData', chartData) }
      
    </div>
  );
}

export default LineChart;
