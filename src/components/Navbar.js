import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ currentUser, setCurrentUser }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    console.log("handling logout");
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <header className="text-slate-100 bg-black border-b-2 border-orange-300 text-lg px-2 py-2">
      <div className="flex justify-between">

        <div className="ml-5 space-x-6 flex">
          <div className="py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          </div>
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>

        <div className="flex space-x-6 mr-5">
          <div>
            <Link to="/about">About</Link>
          </div>
          {!currentUser && (
            <div>
              <Link to="/signup">Sign up</Link>
            </div>
          )}
          {!currentUser && (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )}
          {currentUser && (
            <div>
              <Link to="/weather-charts">Weather charts</Link>
            </div>
          )}
          {currentUser && <div>{currentUser}</div>}
          {currentUser && (
            <div>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
