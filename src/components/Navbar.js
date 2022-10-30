import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <h2>MyApp</h2>
      <Link to="/" >Home</Link>
      <br /> 
      <Link to="/about" >About</Link>

    </header>
  )
}

export default Navbar
