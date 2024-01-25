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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="main-menu">
          <img src={Vector} alt="" />
          <img src={Category} alt="" />
          <img src={TrendUp} alt="" />
          <img src={Profile} alt="" />
          <img src={Box} alt="" />
          <img src={Discount} alt="" />
          <img src={Info} alt="" />
          <div className="thame">
            <div className="thame-2">
              <div className="frame-thame">
                <div className="b-frame">
                  <img
                    src={Brightness}
                    alt=""
                    style={{ width: "1.05469", height: "1.05469" }}
                  />
                </div>
                <img src={Moon} alt="" />
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
  );
};

export default Sidebar;
