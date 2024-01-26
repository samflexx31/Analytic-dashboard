import React from "react";
import "./SalesTrend.css";
import Arrow from "../../images/Arrow - Down 2.svg";
import bar from "../../images/mainbar.png";
import shape from "../../images/Combined Shape.svg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const SalesTrend = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="sales"
      style={{
        background: darkMode && "#2d3748",
        color: darkMode && "white",
      }}
    >
      <div className="title">
        <p style={{ color: darkMode && "white" }}>Sales Trends</p>
        <div className="title-date">
          <p style={{ color: darkMode && "white" }}>Sort by:</p>
          <div
            className="date-filter"
            style={{ background: darkMode && "#2d3748" }}
          >
            <div className="date-c">
              <p style={{ color: darkMode && "white" }}>Weekly</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sales-amount">
        <p style={{ color: darkMode && "white" }}>50.000</p>
        <p style={{ color: darkMode && "white" }}>40.000</p>
        <p style={{ color: darkMode && "white" }}>30.000</p>
        <p style={{ color: darkMode && "white" }}>20.000</p>
        <p style={{ color: darkMode && "white" }}>10.000</p>
        <p style={{ color: darkMode && "white" }}>5.000</p>
        <p style={{ color: darkMode && "white" }}>0.000</p>
      </div>
      <div className="sales-line">
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
        <div className="dotted-line" />
      </div>
      <div className="sales-month">
        <p style={{ color: darkMode && "white" }}>Jan</p>
        <p style={{ color: darkMode && "white" }}>Feb</p>
        <p style={{ color: darkMode && "white" }}>Apr</p>
        <p style={{ color: darkMode && "white" }}>May</p>
        <p style={{ color: darkMode && "white" }}>Jun</p>
        <p style={{ color: darkMode && "white" }}>Mar</p>
        <p style={{ color: darkMode && "white" }}>Jul</p>
        <p style={{ color: darkMode && "white" }}>Aug</p>
        <p style={{ color: darkMode && "white" }}>Sep</p>
        <p style={{ color: darkMode && "white" }}>Oct</p>
        <p style={{ color: darkMode && "white" }}>Nov</p>
        <p style={{ color: darkMode && "white" }}>Dec</p>
      </div>
      <div className="barr">
        <img src={bar} alt="" />
      </div>
      <div className="top-sale">
        <div className="shape">
          <img src={shape} style={{ width: "75px" }} />
          <p>$45,000</p>
        </div>
      </div>
    </div>
  );
};

export default SalesTrend;
