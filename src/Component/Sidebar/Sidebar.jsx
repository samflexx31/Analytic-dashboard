import React from "react";
import "./Sidebar.css";
import Vector from "../../images/Vector.svg";
import Category from "../../images/category.png";
import TrendUp from "../../images/trend-up.svg";
import Profile from "../../images/profile-2user.svg";
import Box from "../../images/box.svg";
import Discount from "../../images/discount-shape.svg";
import Info from "../../images/info-circle.svg";
import Brightness from "../../images/brightness 1.svg";
import Moon from "../../images/moon 1.svg";
import ArrorRight from "../../images/arrow-right.svg";
import Setting from "../../images/setting-2.svg";
import LogOut from "../../images/logout.svg";
import Line from "../../images/line.svg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Sidebar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = (mode) => {
    theme.dispatch({ type: "toggle", mode });
  };
  return (
    <div className={`sidebar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="sidebar">
        <div
          className="container"
          style={{
            background: darkMode ? "#2d3748" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <div className="main-menu">
            <img src={Vector} alt="" />
            <div className="cate">
              <div className="cate-img">
                <img src={Category} alt="" />
              </div>
              <img src={Line} alt="" className="lineImg" />
            </div>
            <img src={TrendUp} alt="" />
            <img src={Profile} alt="" />
            <img src={Box} alt="" />
            <img src={Discount} alt="" />
            <img src={Info} alt="" />
            <div className="thame">
              <div
                className="thame-2"
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                <div className="frame-thame">
                  <div
                    className="b-frame"
                    onClick={() => handleClick("light")}
                    style={{
                      background: darkMode && "black",
                      color: darkMode && "white",
                    }}
                  >
                    <img
                      src={Brightness}
                      alt=""
                      style={{ width: "1.05469", height: "1.05469" }}
                    />
                  </div>
                  <img
                    src={Moon}
                    alt=""
                    onClick={() => handleClick("dark")}
                    style={{
                      background: darkMode && "#2d3748",
                      color: darkMode && "white",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="other-menu">
            <img src={ArrorRight} alt="" />
            <img src={Setting} alt="" />
            <img src={LogOut} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
