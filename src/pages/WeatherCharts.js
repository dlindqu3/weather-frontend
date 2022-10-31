import React, { useState } from 'react'
import axios from 'axios'

function WeatherCharts() {

  const [locsQuery, setLocsQuery] = useState()
  const [locsArr, setLocsArr] = useState()
  const [isLoading, setIsLoading] = useState(false);

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
  }


  return (
    <div>
      <p>Weather Charts here</p>
      <p>add components for: query lat/lon, display chart</p>
      <p>This page will be restricted to logged-in users</p>

      <form onSubmit={handleLocationsSubmit}>
        <input
          type="text"
          placeholder="City..."
          onChange={(e) => setLocsQuery(e.target.value)}
        />
      </form>

    {isLoading && <p>Loading...</p>}
    {locsArr && locsArr.map((arr) => {
      return (<p>{arr[0]}:{arr[1]}, {arr[2]} </p>)
    })}

    </div>
  )
}

export default WeatherCharts
