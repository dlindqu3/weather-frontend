import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute(  { currentUser, Component } ) {
  
  return (
      <>
      { currentUser ? <Component /> : <Navigate to="/login" /> } 
      </>
  )
}

export default ProtectedRoute
