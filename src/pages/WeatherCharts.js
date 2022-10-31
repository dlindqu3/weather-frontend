import React, { useState } from "react"
import axios from "axios"

function WeatherCharts() {
  const [hasInput, setHasInput] = useState(false)
  const [locsQuery, setLocsQuery] = useState()
  const [locsArr, setLocsArr] = useState()
  const [finalLoc, setFinalLoc] = useState()
  const [isLoading, setIsLoading] = useState(false)

  let baseURL = "http://localhost:4500/api"
  // http://localhost:4500/api/location/boston
  // http://localhost:4500/api/weather/coordinates/41.8755616/-87.6244212

  const handleLocationsSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    let queryUrl = baseURL + "/location/" + locsQuery
    let resData = await axios.get(queryUrl)
    let resArr = resData.data
    
    setLocsArr(resArr)
    setIsLoading(false)
    setHasInput(true)
  };

  const handleLocChange = (e) => {
    console.log(e.target.value)
    setFinalLoc(e.target.value)
  }

  const handleCallWeather = async (coordinates) => {
    let queryUrl = baseURL + "/weather/coordinates/" + coordinates[0] + "/" + coordinates[1]
    console.log('queryUrl: ', queryUrl)
    let resData = await axios.get(queryUrl)
    console.log(resData.data.list)
  }

  const findCoordinates = () => {
    for (let i = 0; i < locsArr.length; i++){
      if (locsArr[i][0] === finalLoc){
        let coordinates = [locsArr[i][1], locsArr[i][2]]
        return coordinates
      }
    }
  }

  const handleLocSubmit = async (e) => {
    e.preventDefault()
    let coordinates = findCoordinates()
    handleCallWeather(coordinates)
  };

  return (
    <div>
      <p>Weather Charts here</p>
      {/* <p>add components for: query lat/lon, display chart</p>
      <p>This page will be restricted to logged-in users</p> */}

      {!hasInput && (
        <form onSubmit={handleLocationsSubmit}>
          <input
            type="text"
            placeholder="City..."
            onChange={(e) => setLocsQuery(e.target.value)}
          />
        </form>
      )}

      {isLoading && <p>Loading...</p>}

      {locsArr && (
        <form>
          <select name="finalLoc" id="finalLoc" onChange={handleLocChange}>
            <option selected disabled>SELECT</option>
            {locsArr &&
              locsArr.map((arr) => {
                return <option value={arr[0]}>{arr[0]}</option>;
              })}
          </select>
          <button onClick={handleLocSubmit}>Submit</button>
        </form>
      )}
      {/* {finalLoc && <p>finalLoc: {finalLoc}</p>} */}
    </div>
  );
}

export default WeatherCharts;
