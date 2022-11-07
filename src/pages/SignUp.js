import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function SignUp( { setCurrentUser } ) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const signup = async (username, password) => {
    // setIsLoading(true)
    let baseURL = `http://localhost:4500/api/user/signup`
    let reqBody = {
      username: username,
      password: password
    }

    try {
      const res = await axios.post(baseURL, reqBody)
      // res.data is an object with keys of 'username' and 'token'
      localStorage.setItem('user', JSON.stringify(res.data))
      setCurrentUser(res.data.username)
      navigate("/weather-charts")
    } catch (error){
      setSignupError(error.response.data.error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSignupError("")
    signup(username, password)
  }

  return (
    <div>
      <p>Sign Up Page</p>
      <form onSubmit={handleSubmit}>
        <h4>Sign Up</h4>
        {signupError && <p>{signupError}</p>}
        <label>Username:</label>
        <input 
          type="text"
          onChange={(e) => {setUsername(e.target.value)}}
          value={username}
        />
        <br />
         <label>Password:</label>
        <input 
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp
