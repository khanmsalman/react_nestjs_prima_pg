import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();


  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')


  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <nav className='list-none h-16 border-b mb-2 px-2 sm:px-5 md:px-20 text-lg flex items-center justify-between'>
        <NavLink to={'/'} className='bg-green-700 text-white ml-5  rounded-md px-4 py-1.5'>Home</NavLink>
        <span className='text-green-800 bg-green-100 rounded-md px-3 py-1.5'>Welcome <span className="font-bold ml-1 text-xl">{user.name}</span></span>
        <div className="flex items-center justify-start gap-2">
          {
            !token && !user ?
              <>
                <NavLink to={'/login'} className='bg-green-700 text-white rounded-md px-4 py-2'>Login</NavLink>
                <NavLink to={'/signup'} className='bg-green-700 text-white rounded-md px-4 py-2'>Signup</NavLink>
              </>
              :
              <>
                <button onClick={handleLogout} className='bg-green-700 text-white rounded-md px-4 pb-2 py-1'>Logout</button>
              </>
          }
        </div>
      </nav>

    </div>
  )
}

export default Header