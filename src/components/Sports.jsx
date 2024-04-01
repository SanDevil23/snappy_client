import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Sports = () => {
  const [apiData, setApiData] = useState([]);
  const getData = async () => {
    const { data } = await axios.post("http://localhost:4000/api/v1/sports", {
      url: "https://indianexpress.com/section/sports/",
    });
    const parsedData = JSON.parse(data);
    const slicedArray = parsedData.slice(0, 5);
    setApiData(slicedArray);
  };
  useEffect(() => {
    getData();
  }, []);

  const mapping = apiData.map((each, index) => {
    const url = encodeURIComponent(each.articleLink)
    return (
        <div className="grid grid-cols-1 gap-2 p-8 bg-white" key={index}>
          <div>
            <img src={each.imgUrl} alt={each.title} />
          </div>
          <div className=" text-black">
            <Link href={each.articleLink} to={`/second/${url}`}>
                {each.title}
            </Link>
            <a className="bg-blue-600 text-white py-1 px-2 rounded m-1 inline-block" href={each.articleLink} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>

        </div>
    );
  });

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="text-center text-5xl p-5"> Sports</div>
      <hr />
      {mapping}
    </div>
  );
};

export default Sports;
