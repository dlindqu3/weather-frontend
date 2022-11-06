import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import WeatherCharts from "./pages/WeatherCharts"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  // global auth state 
  const [hasUser, setHasUser] = useState(true)
  // const [currentUser, setCurrentUser] = useState()


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='forStyles'>
          <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          
          <Route 
            path="/weather-charts"
            element={<ProtectedRoute 
                      Component={WeatherCharts} 
                      hasUser={hasUser} 
                    />}
          /> 
        
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
