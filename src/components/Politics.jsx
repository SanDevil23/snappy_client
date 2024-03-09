import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Politics = () => {
  const [apiData, setApiData] = useState([])
  const getdata = async () => {
    const { data } = await axios.post('http://localhost:4000/api/v1/politics', { url: "https://indianexpress.com/section/political-pulse/" })
    const parsedData = JSON.parse(data)
    const slicedArray = parsedData.slice(0, 5);
    setApiData(slicedArray)
  }
  useEffect(() => {
    getdata()
  }, [])

  const mapping = apiData.map((each, index) => {
    return (
      <div key={index}>
        <h3 href={each.articleLink}>{each.title}</h3>
        <img src={each.imgUrl} alt={each.title} />
        <a href={each.articleLink} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    );
  });

  return (
    <div>Politics
      {mapping}
    </div>
  )
}

export default Politics
