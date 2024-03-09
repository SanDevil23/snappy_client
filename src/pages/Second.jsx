import React from 'react'
import { useParams } from 'react-router-dom'
const Second = () => {
  const { title } = useParams();
  return (
    <div>Second
      <div>this is the second page the title of the news selected is {title} </div>
    </div>
  )
}

export default Second
