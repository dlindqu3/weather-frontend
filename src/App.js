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
  const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        {/* MAIN STYLES FOR APP ON THIS DIV: */}
        <div className='text-slate-100 bg-black h-screen'>
          <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} exact />
          <Route 
            path="/signup" 
            element={<SignUp setCurrentUser={setCurrentUser}/>} 
            exact 
            />
          
          <Route 
            path="/weather-charts"
            element={<ProtectedRoute 
                      Component={WeatherCharts} 
                      currentUser={currentUser} 
                    />}
          /> 
        
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
