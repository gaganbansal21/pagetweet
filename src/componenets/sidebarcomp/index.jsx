import React from "react";
import "./index.css";
import person from "../../assets/person.png";
const SideBarComp = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container-div">
        <div className="sidebar-div-uppertext">
          <h2>RATATOUILLE</h2>
        </div>
        <div className="text-container">
          <div className="bottom-text-conatiner">
            <img src={person} alt="user-icon" />
          </div>
          <div className="middle-text-container">
            <div>
                <p>Remy</p>
            </div>
            <div>
                <p>@remy</p>
            </div>
          </div>
        </div>

        <div className="last-section-container">
            <div>
                <h3>Tweet</h3>
            </div>
            <div>
            <h3>Following</h3>
            </div>
            <div>
            <h3>Followers</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarComp;
