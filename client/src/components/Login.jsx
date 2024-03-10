import React, { useState } from 'react'
import { LoginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({email:'',password:''})
    const navigate = useNavigate();

    const  handleSubmit=async(e)=>{
        e.preventDefault();

        const res = await LoginUser(loginData)
        if(!!res){
          localStorage.setItem('user',JSON.stringify(res.user))
          localStorage.setItem('token',res.token)
          navigate('/')
        }
        
        setLoginData({email:'',password:''})
    }

  return (
    <div className=''> 
    <div className="w-2/5 mx-auto p-10 rounded-3xl mt-10 shadow-2xl shadow-green-500/35 border">

        <h1 className='text-4xl font-bold text-center py-5 pb-7 text-green-800'>Login </h1>
        <form onSubmit={handleSubmit} className=' flex flex-col justify-start gap-5 items-center'>
            <input type="email" name='email' value={loginData.email} onChange={(e)=>setLoginData({...loginData,[e.target.name]:e.target.value})} placeholder='enter email' className='text-green-600 placeholder:text-green-500/75 text-lg w-full outline-none shadow-2xl shadow-green-300/20 rounded-md p-2 bg-green-100 border focus:border focus:border-green-400' />
            <input type="password" name='password' value={loginData.password} onChange={(e)=>setLoginData({...loginData,[e.target.name]:e.target.value})} placeholder='enter password' className='text-green-600 placeholder:text-green-500/75 text-lg w-full outline-none shadow-2xl shadow-green-300/20 rounded-md p-2 bg-green-100 border focus:border focus:border-green-400' />

            <input type="submit" value="Login" className='bg-green-700 cursor-pointer text-white px-4 py-2 text-lg rounded-md' />
        </form>
    </div>
    </div>
  )
}

export default Login