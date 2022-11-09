import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import axios from 'axios'

function SignUp( { setCurrentUser } ) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")
  const [displayPassword, setDisplayPassword] = useState(false)
  const [passwordType, setPasswordType] = useState('password')
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

  const handlePasswordDisplay = async () => {
    if (displayPassword === true){
      setDisplayPassword(false)
      setPasswordType('password')
    } else if (displayPassword === false){
      setDisplayPassword(true)
      setPasswordType('text')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSignupError("")
    signup(username, password)
  }

  return (
    <div>
      <div className='flex justify-center'>
      <div className='bg-red-400 w-full max-w-xs px-4 py-4 rounded'>
      <form onSubmit={handleSubmit}>
        <h4 className='flex justify-center'>Sign Up</h4>
        <label >Username:</label>
        <input 
          type="text"
          onChange={(e) => {setUsername(e.target.value)}}
          value={username}
          className="text-black rounded-sm my-1 flex justify-center"
        />
         <label>Password:</label>
         <div className='flex'>
        <input 
          type={passwordType}
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          className="text-black rounded-sm my-1 flex justify-center"
        />
        {!displayPassword && <span className=''><Icon icon={eyeOff} size={20} className='mx-1' onClick={handlePasswordDisplay}/></span>}
        {displayPassword && <span className=''><Icon icon={eye} size={20} className='mx-1' onClick={handlePasswordDisplay}/></span>}
        </div>
       { signupError ? <p>**{signupError}</p> : <p className='my-1'></p>}
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 flex justify-center">Submit</button>
      </form>
      </div>
      </div>

    </div>
  )
}

export default SignUp
