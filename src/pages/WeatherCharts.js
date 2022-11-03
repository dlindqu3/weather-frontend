import React, { useState } from "react"
import LineChart from "../components/LineChart"
import axios from "axios"

function WeatherCharts() {
  const [hasInput, setHasInput] = useState(false)
  const [locsQuery, setLocsQuery] = useState()
  const [locsArr, setLocsArr] = useState()
  const [finalLoc, setFinalLoc] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [weatherData, setWeatherData] = useState()
  const [invalidReq, setInvalidReq] = useState(false)

  let baseURL = "http://localhost:4500/api"
  // http://localhost:4500/api/location/boston
  // http://localhost:4500/api/weather/coordinates/41.8755616/-87.6244212

  const handleLocationsSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    let queryUrl = baseURL + "/location/" + locsQuery
    console.log(queryUrl)
    let resData = await axios.get(queryUrl)
    if (resData.data['error']){
      console.log('there is an error ', resData.data)
      setInvalidReq(true)
      setHasInput(false)
      setIsLoading(false)
    } else {
      console.log('there is no error ', resData.data)
      let resArr = resData.data
      setInvalidReq(false)
      setLocsArr(resArr)
      setHasInput(true)
      setIsLoading(false)
    }
  };

  const handleLocChange = (e) => {
    console.log(e.target.value)
    setFinalLoc(e.target.value)
  }
 
  const findCoordinates = () => {
    for (let i = 0; i < locsArr.length; i++){
      if (locsArr[i][0] === finalLoc){
        let coordinates = [locsArr[i][1], locsArr[i][2]]
        return coordinates
      }
    }
  }

  const handleCallWeather = async (coordinates) => {
    let queryUrl = baseURL + "/weather/coordinates/" + coordinates[0] + "/" + coordinates[1]
    console.log('queryUrl in handleCallWeather: ', queryUrl)

    let resData = await axios.get(queryUrl)

    // if (resData['error']){
    //   console.log('there is an error: ', resData['error'])
    // } else {
    //   console.log('there is no error: ', resData['resData'])
    // }
    // console.log('resData.data.list from handleCallWeather: ', resData.data.list)
    
    // let resList = resData.data.list
    // console.log('resList: ', resList)
    // let forecasts = []
    // for (let i = 0; i < resList.length; i++){
    //   let current = resList[i]
    //   forecasts.push([current.weather[0].main, current.main.temp, current.dt_txt])
    // }
    // // this stage works, forecasts is normal 
    // console.log('forecasts: ', forecasts)

    // setWeatherData(forecasts)
  }

  const handleLocSubmit = async (e) => {
    e.preventDefault()
    let coordinates = findCoordinates()
    handleCallWeather(coordinates)
  };

  return (
    <div>
      <p>Weather Charts here</p>
      <p>This will display the weather for the next five days.</p>

      {!hasInput && (
        <form onSubmit={handleLocationsSubmit}>
          <input
            data-testid="locationInput"
            type="text"
            placeholder="City..."
            onChange={(e) => setLocsQuery(e.target.value)}
          />
        </form>
      )}

      {isLoading && <p>Loading...</p>}

      {invalidReq && <p>Please enter a valid city name.</p>}

      {/* { locsArr && console.log('locsArr: ', locsArr)} */}
      {locsArr && (
        <form>
          <select name="finalLoc" id="finalLoc" onChange={handleLocChange}>
            <option selected disabled>SELECT</option>
            {
              locsArr.map((arr, index) => {
                return <option value={arr[0]} key={index}>{arr[0]}</option>;
              })
            }
          </select>
          <button onClick={handleLocSubmit}>Submit</button>
        </form>
      ) }


     {/* {weatherData && weatherData.map((item, index) => {
      return <p key={index}>{item[0]}, {item[1]}, {item[2]}</p>
     })} */}

      {/* {weatherData && console.log('weatherData: ', weatherData)} */}
     {/* <LineChart weatherData={weatherData}/>  */}
    </div>
  );
}

export default WeatherCharts;
