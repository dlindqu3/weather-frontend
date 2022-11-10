import React from 'react'

function Home() {

  // in this page, include:
    // navbar component 
    // link to signup page 
    // link to login page 
    // general description of site 
    // navbar 

  return (
    <div>
      <h3 className="flex justify-center">Welcome!</h3>
      <p>This site allows you to conveniently and quickly see the upcoming weather for a given location. Once you have created an account, you can query for weather data by designating a given city name. The server might take 20-30 seconds to start up after 15 or so minutes of inactivity, so don't be alarmed if there's some initial lag. Thank you for visiting the site.</p>
    </div>
  )
}

export default Home
