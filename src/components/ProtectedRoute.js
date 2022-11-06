import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute(  { hasUser, Component } ) {
  
  return (
      <>
      { console.log('hasUser: ', hasUser) }
      { hasUser ? <Component /> : <Navigate to="/login" /> } 
      </>
  )
}

export default ProtectedRoute
