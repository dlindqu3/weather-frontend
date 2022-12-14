import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import WeatherCharts from "./pages/WeatherCharts"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  // global auth state 
  const [currentUser, setCurrentUser] = useState(null)

 
  // useEffect to check if there's a user in localStorage 
  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("celera-user")) 
    if (loggedInUser){
      setCurrentUser(loggedInUser.username)
    }
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        {/* MAIN STYLES FOR APP ON THIS DIV: */}
        <div className='text-slate-100 h-screen mx-3 my-3'>
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
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
