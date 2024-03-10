import React, { useEffect, useState } from 'react'
import { deleteTodo, getAllTodos, getallusers, updateTodoDone } from '../services/api'
import TodoForm from './TodoForm';
import axios from 'axios';

const Home = () => {
    const [todos, setTodos] = useState(null)
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [allPages, setAllPages] = useState(null)
    const user = JSON.parse(localStorage.getItem('user'))

    console.log(user.id)

    useEffect(() => {
        getTodos();
    }, [page, pageSize])
    const getTodos = async () => {
        const res = await getAllTodos(page, pageSize, user.id)
        setTodos(res?.todos)
        setAllPages(res?.totalPages)
    }

    console.log(todos)
    const handlePrev = () => {
        setPage(page - 1)

    }
    const handleNext = () => {
        setPage(page + 1)
    }

    const handleDelete=async(id)=>{
        const res = await deleteTodo(id);
        if(!!res){
            getTodos()
        }
    }
    
    const updateDone=async(id)=>{
        const res = await updateTodoDone(id)
        console.log(res)
        if(!!res){
            getTodos()
        }
    }

    return (
        <div>
            <TodoForm getTodos={getTodos} />

            {/* Todos List */}
            <div className="w-[90%] sm:w-[70%] lg:w-1/2 min-h-[65vh] border-t  mx-auto pt-7 mt-7 border-green-600 flex flex-col items-stretch justify-start gap-3 ">
                <h2 className='text-lg text-center -mt-5 text-green-500'>Todos Created By {user.name}</h2>
                {
                    !!todos && todos?.length > 0 && todos.map((todo) => (
                        <div className='bg-green-200 border text-green-700 p-3 rounded-md flex justify-between items-center gap-3'>
                            <span className='text-lg line-clamp-1 w-full'>{todo.title}</span>
                            <span className='flex justify-start items-center gap-2'>

                                <button onClick={()=>updateDone(todo.id)} className={`btn !px-3 !py-1.5 bg-purple-600 text-white rounded-md ${todo.done ? '' : 'line-through'}`}>Done</button>
                                <button onClick={()=>handleDelete(todo.id)} className='btn bg-red-500 hover:bg-red-600 text-white rounded-md !px-3 !py-1.5'>Delete</button>
                            </span>
                        </div>
                    ))
                }
            </div>
            {/* Pagination buttons */}
            <div className="w-1/2 mx-auto py-10 flex justify-center items-center">
                {
                    page !== 1 ?
                        <button onClick={handlePrev} className='bg-green-700  float-left text-white rounded-full px-5 py-2'>&lt; Prev</button>
                        :
                        <button className='bg-green-500/70  float-left cursor-default text-white rounded-full px-5 py-2'>&lt; Prev</button>
                }
                <span className='mx-auto inline-block'>{page}/{allPages}</span>
                {
                    page + 1 > allPages ?
                        <button className='bg-green-500/70 cursor-default text-white float-right rounded-full px-5 py-2'>Next &gt;</button>
                        :
                        <button onClick={handleNext} className='bg-green-700 text-white float-right rounded-full px-5 py-2'>Next &gt;</button>
                }
            </div>
        </div>
    )
}

export default Home