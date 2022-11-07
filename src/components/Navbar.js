import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar( { currentUser, setCurrentUser } ) {

  let navigate = useNavigate()

  const handleLogout = () => {
    console.log('handling logout')
    localStorage.removeItem('user')
    setCurrentUser(null)
    navigate("/")
  }

  return (
    <header>
      <h2>MyApp</h2>
      <Link to="/" >Home</Link>
      <Link to="/about">About</Link>
      { !currentUser && <Link to="/login">Login</Link> } 
      { !currentUser && <Link to="/signup">Sign up</Link> }
      { currentUser && <Link to="/weather-charts">Weather charts</Link> } 
      { currentUser && <p>{ currentUser }</p> }
      { currentUser && <Link to="/" onClick={handleLogout} >Logout</Link> } 
    </header>
  )
}

export default Navbar
