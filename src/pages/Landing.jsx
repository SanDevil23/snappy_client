import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from "react-lottie-player";
import animationData from "../components/lottie/Animation - 1711981605351.json"
import Sidebar from '../components/Sidebar'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="sm:flex-col p-4 bg-slate-800 h-screen">
      <div className='text-2xl text-white text-center p-6 decoration-solid' >Snappy Client</div>
      <hr/>
      <Sidebar></Sidebar>
      {/* <button className="bg-blue-600 text-white py-2 px-4 rounded mt-5" onClick={() => navigate('/first')}> Get To Newz Page </button> */}
      <Lottie options={{ loop: true, animationData }} height={400} width={400} />

    </div>
  )
}

export default Landing
