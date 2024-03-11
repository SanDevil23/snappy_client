import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Second = () => {
  let { articleLink } = useParams();
  const [summary, setSummary] = useState('')
  const getArticleSummary = async () => {
    const { data } = await axios.post('http://localhost:4000/api/v1/getArticle', { url: articleLink })
    console.log(data)
    setSummary(data)
  }

  useEffect(() => {
    getArticleSummary()
  }, [])

  return (
    <div>
      <div>this is a div</div>
      <div>{articleLink}</div>
      <div>{summary}</div>
    </div>
  )
}

export default Second
