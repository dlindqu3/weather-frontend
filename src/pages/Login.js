import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Login({ setCurrentUser }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState(null)

  let navigate = useNavigate()

  const login = async (username, password) => {
    // setIsLoading(true)
    // setLoginError(false)

    let baseURL = `http://localhost:4500/api/user/login`

    let reqBody = {
      username: username,
      password: password
    }

    try {
      const res = await axios.post(baseURL, reqBody)
      console.log('res: ', res)
      // res.data is an object with keys of 'username' and 'token'
      localStorage.setItem('user', JSON.stringify(res.data))
      setCurrentUser(res.data.username)
      navigate("/weather-charts")
    } catch (error){
      setLoginError(error.response.data.error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
    console.log(username, password)

  }

  return (
    <div>
      <p>Login Page</p>
      <form onSubmit={handleSubmit}>
        <h4>Login</h4>
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

export default Login