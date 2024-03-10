import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const auth = localStorage.getItem('token')
  console.log(auth)
  return (
    <div>
      {
        auth && auth!==null?
        <Outlet/>
        :
          <Navigate to={'/login'} />
      }
    </div>
  )
}

export default ProtectedRoute 