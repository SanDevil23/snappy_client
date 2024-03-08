import React from 'react'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>this is Landing page go to latest news</div>
      <button onClick={() => navigate('/sports')} >get to newz page</button>
    </div>
  )
}

export default Landing
