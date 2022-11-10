import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  const signup = async (username, password) => {
    // setIsLoading(true)
    // let baseURL = `http://localhost:4500/api/user/signup`
    let baseURL = `https://weather-backend-rv0i.onrender.com/api/user/signup`


    let reqBody = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(baseURL, reqBody);
      // res.data is an object with keys of 'username' and 'token'
      localStorage.setItem("user", JSON.stringify(res.data));
      setCurrentUser(res.data.username);
      navigate("/weather-charts");
    } catch (error) {
      setSignupError(error.response.data.error);
    }
  };

  const handlePasswordDisplay = async () => {
    console.log("handlePasswordDisplay clicked");
    if (displayPassword === true) {
      setDisplayPassword(false);
      setPasswordType("password");
    } else if (displayPassword === false) {
      setDisplayPassword(true);
      setPasswordType("text");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupError("");
    signup(username, password);
  };

  return (
    <div>
      <br />
      <br />
      <div className="flex justify-center">
        <div className="w-full max-w-sm px-4 py-4 rounded border-solid border-2 border-slate-100">
          <form onSubmit={handleSubmit}>
            <h4 className="flex justify-center">Sign Up</h4>
            <label className="flex justify-center">Username:</label>
            <div className="flex justify-center">
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                className="text-black rounded-sm my-1 flex justify-center"
              />
            </div>
            <label className="flex justify-center">Password:</label>
            <div className="flex justify-center">
              <input
                type={passwordType}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                className="text-black rounded-sm my-1 flex justify-center"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="checkbox"
                onChange={() => {
                  handlePasswordDisplay();
                }}
                className="mx-1"
              />
              {displayPassword && <span>Hide password</span>}
              {!displayPassword && <span>Show password</span>}
            </div>

            <div className="flex justify-center">
              {signupError ? <p>**{signupError}</p> : <p className="my-1"></p>}
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 flex justify-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
