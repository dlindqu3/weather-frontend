import React, { useState } from 'react'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
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