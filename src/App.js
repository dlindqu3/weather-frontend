import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import WeatherCharts from "./pages/WeatherCharts"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='forStyles'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/weather-charts" element={<WeatherCharts />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
