import React from "react";
import "./Cbox.css";
import box from "../../images/box-tick.png";
import chart from "../../images/Group 3.svg";
import chartred from "../../images/Group 4.svg";
import rotate from "../../images/3d-rotate.png";
import Shopping from "../../images/shopping-cart.png";
import coin from "../../images/coin.png";
import up from "../../images/trendup.svg";
import down from "../../images/trenddown.svg";
import { themeContext } from "../../Context";
import { useContext } from "react";

export const Cbox = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="c-box"
      style={{
        background: darkMode && "#2d3748",
        color: darkMode && "white",
      }}
    >
      <div className="c-container">
        <div className="c-icon">
          <img
            src={box}
            alt=""
            style={{
              border: "1.5px solid #eaeaea",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <img src={chart} alt="" />
        </div>
        <div className="c-text">
          <p> Total Order</p>
          <p style={{ color: darkMode && "white" }}>350</p>
        </div>
        <div className="c-month">
          <div className="c-up">
            <div className="trend-up">
              <img src={up} alt="" />
            </div>
            <p style={{ color: darkMode && "white" }}>23,5%</p>
          </div>
          <p style={{ color: darkMode && "white" }}>vs. previous month</p>
        </div>
      </div>
    </div>
  );
};

export const CboxTwo = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="c-box"
      style={{
        background: darkMode && "#2d3748",
        color: darkMode && "white",
      }}
    >
      <div className="c-container">
        <div className="c-icon">
          <img
            src={rotate}
            alt=""
            style={{
              border: "1.5px solid #eaeaea",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <img src={chartred} alt="" />
        </div>
        <div className="c-text">
          <p> Total Refund</p>
          <p style={{ color: darkMode && "white" }}>270</p>
        </div>
        <div className="c-month">
          <div
            className="c-up"
            style={{ background: "rgba(237, 84, 78, 0.12)" }}
          >
            <div className="trend-up">
              <img src={down} alt="" />
            </div>
            <p style={{ color: "red" }}>23,5%</p>
          </div>
          <p style={{ color: darkMode && "white" }}>vs. previous month</p>
        </div>
      </div>
    </div>
  );
};

export const CboxThree = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="c-box"
      style={{
        background: darkMode && "#2d3748",
        color: darkMode && "white",
      }}
    >
      <div className="c-container">
        <div className="c-icon">
          <img
            src={Shopping}
            alt=""
            style={{
              border: "1.5px solid #eaeaea",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <img src={chartred} alt="" />
        </div>
        <div className="c-text">
          <p>Average Sales</p>
          <p style={{ color: darkMode && "white" }}>1567</p>
        </div>
        <div className="c-month">
          <div
            className="c-up"
            style={{ background: "rgba(237, 84, 78, 0.12)" }}
          >
            <div className="trend-up">
              <img src={down} alt="" />
            </div>
            <p style={{ color: "red" }}>23,5%</p>
          </div>
          <p style={{ color: darkMode && "white" }}>vs. previous month</p>
        </div>
      </div>
    </div>
  );
};

export const CboxFour = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="c-box"
      style={{
        background: darkMode && "#2d3748",
        color: darkMode && "white",
      }}
    >
      <div className="c-container">
        <div className="c-icon">
          <img
            src={coin}
            alt=""
            style={{
              border: "1.5px solid #eaeaea",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <img src={chart} alt="" />
        </div>
        <div className="c-text">
          <p> Total Income</p>
          <p style={{ color: darkMode && "white" }}>$350,000</p>
        </div>
        <div className="c-month">
          <div className="c-up">
            <div className="trend-up">
              <img src={up} alt="" />
            </div>
            <p style={{ color: darkMode && "white" }}>23,5%</p>
          </div>
          <p style={{ color: darkMode && "white" }}>vs. previous month</p>
        </div>
      </div>
    </div>
  );
};
