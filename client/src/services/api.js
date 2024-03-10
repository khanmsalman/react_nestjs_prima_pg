import axios from "axios"

const URL = 'http://localhost:3000'
export const SignupUser=async(data)=>{
    try {
        const res = await axios.post(`${URL}/auth/signup`,data)
        console.log(res.data)
    } catch (error) {
        console.log("error in client while sign up: ",error)
    }
}

export const LoginUser=async(data)=>{
    try {
        const res = await axios.post(`${URL}/auth/signin`,data)
        return res.data
    } catch (error) {
        console.log("error in client in login: ",error)
    }
}

export const getallusers=async()=>{
    try {
        const res = await axios.get(`${URL}/user`)
        return res.data 
    } catch (error) {
        console.log(error)
    }
}

export const getAllTodos=async(page,pageSize,userId)=>{
    try {
        const res = await axios.get(`${URL}/todo?page=${page}&limit=${pageSize}&userid=${userId}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export const addTodo=async(todo)=>{
    try {
        const res = await axios.post(`${URL}/todo`,todo)
        return res.data;
    } catch (error) {
        console.log("error in client while add todo : ",error)
    }
}

export const deleteTodo=async(id)=>{
    try {
        const res = await axios.delete(`${URL}/todo/${id}`)
        return res.data;
    } catch (error) {
        console.log("error in client while delete todo: ",error)
    }
}

export const updateTodoDone=async(id)=>{
    try {
        const res = await axios.put(`${URL}/todo/${id}`)
        return res.data
    } catch (error) {
        console.log("error in client while update todo: ",error)        
    }
}