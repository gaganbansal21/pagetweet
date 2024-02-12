import React from "react";
import ContentReader from "../contentReader";
import './index.css'

// eslint-disable-next-line react/prop-types
const ContentBoard = ({ data }) => {
  console.log("data", data);
  
  return (
    <div className="div-main-card-container">
      <div className="added-tweets-container">
          <p>Recently Added Tweets</p>
      </div>
      <div>
      {data.map((item,i) => (
          // <ContentReader  />
          // item.val
          <ContentReader  key={i} value={item.val}/>
        ))}
      </div>
    </div>
  );
};

export default ContentBoard;
