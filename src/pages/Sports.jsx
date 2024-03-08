
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sports = () => {
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    const { data } = await axios.post('http://localhost:4000/api/v1/sports', { url: "https://indianexpress.com/section/sports/" })
    const parsedData = JSON.parse(data)
    setApiData(parsedData)
  };

  useEffect(() => {
    getData();
  }, []);


  if (!Array.isArray(apiData)) {
    return <div>Loading...</div>; // Or display an error message
  }

  const mapping = apiData.map((each, index) => {
    return (
      <div key={index}>
        <h3>{each.title}</h3>
        <img src={each.imgUrl} alt={each.title} />
        <a href={each.articleLink} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    );
  });

  return (
    <div>
      <h1>Sports</h1>
      {mapping}
      <button onClick={() => console.log(apiData)}></button>
    </div>
  );
};

export default Sports;
