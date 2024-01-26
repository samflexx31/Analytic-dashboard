import React from "react";
import "./Header.css";
import Search from "../../images/Icon - Search.svg";
import Calender from "../../images/solar_calendar-linear.svg";
import Bell from "../../images/solar_bell-outline.svg";
import arrow from "../../images/Arrow - Down 2.svg";
import Myp from "../../images/myp.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Header = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="header"
      style={{
        background: darkMode ? "#2d3748" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="searchIcon">
        <div className="dash">
          <p style={{ color: darkMode && "white" }}>Dashboard</p>
          <div className="input-search">
            <div
              className="input-c"
              style={{
                background: darkMode && "black",
                color: darkMode && "white",
              }}
            >
              <img src={Search} alt="" />
              <input
                type="text"
                placeholder="search..."
                style={{
                  background: darkMode && "black",
                  color: darkMode && "white",
                }}
              />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-d">
            <div className="inner-profile-d">
              <img src={Calender} />
              <p style={{ color: darkMode && "white" }}>January 27, 2024</p>
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
                <p style={{ color: darkMode && "white" }}>Ola Tunji</p>
                <p style={{ color: darkMode && "white" }}>samflex@gmail.com</p>
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
