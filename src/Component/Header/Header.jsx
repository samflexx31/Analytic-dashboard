import React from "react";
import "./Header.css";
import Search from "../../images/Icon - Search.svg";
import Calender from "../../images/solar_calendar-linear.svg";
import Bell from "../../images/solar_bell-outline.svg";
import arrow from "../../images/Arrow - Down 2.svg";
import Myp from "../../images/myp.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="searchIcon">
        <div className="dash">
          <p>Dashboard</p>
          <div className="input-search">
            <div className="input-c">
              <img src={Search} alt="" />
              <p>Search...</p>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-d">
            <div className="inner-profile-d">
              <img src={Calender} />
              <p>January 27, 2024</p>
            </div>
            <div className="profile-icon">
              <img src={Bell} alt="" />
            </div>
          </div>
          <div className="profile-info">
            <div className="inner-profile-info">
              <div className="profile-img">
                <img src={Myp} alt="" />
              </div>
              <div className="nameMail">
                <p>Ola Tunji</p>
                <p>samflex@gmail.com</p>
              </div>
            </div>
            <img src={arrow} />
          </div>
        </div>
      </div>
      <div className="line" />
    </div>
  );
};

export default Header;
