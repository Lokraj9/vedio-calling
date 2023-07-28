import React, { useState,useCallback } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [roomId,setRoomId]=useState('');

    const navigate=useNavigate();
    const handleJoin=useCallback(()=>{
        navigate(`/room/${roomId}`)

    },[navigate,roomId])
  return (
    <div className='App'>
        <h1> Video calling</h1>
        <input type='text' placeholder='Enter your room ID' value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
        <button onClick={handleJoin}>Join</button>
    </div>
  )
}

export default Home