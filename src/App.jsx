// import react from 'react'
// import { useState } from "react";npm install -g yarn
import { useState } from "react";
import "./App.css";
import ContentBoard from "./componenets/content";
import NavbarComponenet from "./componenets/navbar";
import SideBarComp from "./componenets/sidebarcomp/index.jsx";

const dummy = [
    {
      val : "Hi Man You are welcome"
    },
    {
      val : "welcome to the server"
    },
    {
      val : "Learning Javascript is Fun "
    },
    {
      val : "Comptetive programming world is increading day by day    "
    },
    {
      val : "programming languages are C++, Java, Javascipt, Python"
    }

]


function App() {
  // const [state, setState] = useState({ value: "", length: 0 });
  // const [sendbackdata, Setsendbackdata] = useState([]);
  const [data,setData] = useState(dummy);
  // const handleLanguage = (val) =>{

  // }

  // const [data,Setdata] = useState([]);

  const sendBackData = val => {
    if(val.length > 0){
      val = {val};
      // console.log(val);
      setData([val,...data]);
    }
  }

  console.log("data app",data);

  return (
    <div> 
      {/* onSelectLanguage={this.handleLanguage} sendbackdata={sendbackdata} */}
      <NavbarComponenet  sendBackData={sendBackData}/>
      <div className="main-container-section">
        <div className="sidebar-comp">
          <SideBarComp />
        </div>
        <div className="contetn-board-main-container">
          <ContentBoard data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
