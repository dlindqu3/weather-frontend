import React from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   // 👇️ navigate programmatically
  //   navigate('/weather-charts');
  // };

  return (
    <div>
      <p>Login Page</p>
      <div>
      <p>Login and go to charts page: </p>
      <button>Login </button>
    </div>
    </div>
  )
}

export default Login
