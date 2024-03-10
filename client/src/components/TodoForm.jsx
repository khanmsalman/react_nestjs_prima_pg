import React, { useState } from 'react'
import { addTodo } from '../services/api'
import { useNavigate } from 'react-router-dom'

const TodoForm = ({getTodos}) => {
    const [todo, setTodo] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res = await addTodo({title:todo,user_id:user.id})
        if(!!res){
            setTodo('')
            getTodos()
        }
        console.log(res)
    }
    return (
        <>
            <div className="text-4xl text-green-700 w-[90%] sm:w-[70%] lg:w-1/2  mx-auto text-center shadow-2xl shadow-green-300/30  font-semibold bg-green-200 p-5 rounded-lg">
                <h1>Todo App </h1>
            </div>
            <div className="pt-7 w-[90%] sm:w-[70%] lg:w-1/2 mx-auto">
                <form onSubmit={handleSubmit} className='flex justify-start gap-4 items-center'>
                    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add Todo . . .' className='text-green-600 placeholder:text-green-500/75 text-lg w-full outline-none shadow-2xl shadow-green-300/20 rounded-md p-2 bg-green-100 border focus:border focus:border-green-400 ' />
                    <button type='submit' className='btn bg-green-600   px-4 py-2 text-white hover:bg-green-700 rounded-md text-lg'>Add</button>
                </form>
            </div>
        </>
    )
}

export default TodoForm