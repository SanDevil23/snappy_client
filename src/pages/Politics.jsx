import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Politics = () => {
  const [apiData, setApiData] = useState([])
  const getdata = async () => {
    const { data } = await axios.post('http://localhost:4000/api/v1/politics', { url: "https://indianexpress.com/section/political-pulse/" })
    const parsedData = JSON.parse(data)
    setApiData(parsedData)
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div>Politics
      <button onClick={() => console.log(apiData)}>see Data</button>
    </div>
  )
}

export default Politics
