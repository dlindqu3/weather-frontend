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

  // let baseURL = "http://localhost:4500/api"
  let baseURL = "https://weather-backend-rv0i.onrender.com/api"
  // http://localhost:4500/api/location/boston
  // http://localhost:4500/api/weather/coordinates/41.8755616/-87.6244212

  const handleLocationsSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    let queryUrl = baseURL + "/location/" + locsQuery
    // console.log(queryUrl)
    let resData = await axios.get(queryUrl)
    if (resData.data['error']){
      // console.log('there is an error ', resData.data)
      setInvalidReq(true)
      setHasInput(false)
      setIsLoading(false)
    } else {
      // console.log('there is no error ', resData.data)
      let resArr = resData.data
      setInvalidReq(false)
      setLocsArr(resArr)
      setHasInput(true)
      setIsLoading(false)
    }
  };

  const handleLocChange = (e) => {
    // console.log(e.target.value)
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
    // console.log('queryUrl in handleCallWeather: ', queryUrl)

    let resData = await axios.get(queryUrl)
    // console.log('resData: ', resData)
    let resList = resData.data.list
    // console.log('resList: ', resList)
    let cityLabel = `Temperature (F) in ${finalLoc}`
    let dates = []
    let temps = []
    let temps2 = []
    for (let i = 0; i < resList.length; i++){
      let current = resList[i]
      dates.push([current.dt_txt])
      temps.push([current.main.temp])
    }
    for (let i = 0; i < temps.length; i++){
      temps2.push(temps[i][0])
    }
    // console.log('dates: ', dates)
    // console.log('temps2: ', temps2)
    let newData = {
      labels: dates,
        datasets: [
          {
            label: cityLabel,
            data: temps2,
            borderColor: 'rgb(2, 136, 209)',
            tension: 0.1
          },
        ],
    }

    setWeatherData(newData)
  }

  const handleLocSubmit = async (e) => {
    e.preventDefault()
    let coordinates = findCoordinates()
    setIsLoading(true)
    handleCallWeather(coordinates)
    setIsLoading(false)
  };

  return (
    <div>
      <p>Weather Charts here</p>
      <p>This will display the weather for the next five days.</p>

      {!hasInput && (
        <form onSubmit={handleLocationsSubmit}>
          <div className="flex justify-start">
          <input
            data-testid="locationInput"
            type="text"
            placeholder="City..."
            onChange={(e) => setLocsQuery(e.target.value)}
            className="text-black rounded-sm my-1 flex justify-center"
          />
          <div className="">
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 mx-2">
              Submit
            </button>
          </div>
          </div>
        </form>
      )}

      {isLoading && <p>Loading...</p>}

      {invalidReq && <h4>Please enter a valid city name.</h4>}

      {locsArr && (
        <form>
          <div className="flex justify-start" >
          <select name="finalLoc" id="finalLoc" onChange={handleLocChange} className="rounded-sm my-1 text-black">
            <option defaultValue selected disabled  className="">SELECT</option>
            {
              locsArr.map((arr, index) => {
                return <option value={arr[0]} key={index}  className="">{arr[0]}</option>;
              })
            }
          </select>
          <button onClick={handleLocSubmit} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 mx-2">Submit</button>
          </div>
        </form>
      ) }

      <div className="flex justify-center">
     { weatherData && <LineChart weatherData={weatherData}/>}
     </div>
    </div>
  );
}

export default WeatherCharts;
