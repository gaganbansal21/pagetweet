import React from 'react'
import './index.css'
import person from "../../assets/person.jpg";


const ContentReader = ({key,value}) => {

  function formatDate(date) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  }
  
  const today = new Date();
  const formattedDate = formatDate(today);
  
  console.log(value);
  // const icon = https://icons8.com/icon/w3ftGGiM1Ays/haikyuu;
  return (
    <div className='content-field-card-container'>
      <div className='icon-class-container'>
        <img src={person} alt="user-icon"/>
      </div>
        <div>
          <div className='user-data-container'>@remy <span>{formattedDate}</span></div>
          <div>{value}</div>
        </div>
    </div>
  )
}

export default ContentReader;