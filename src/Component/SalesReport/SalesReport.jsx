import React from "react";
import "./SalesReport.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const SalesReport = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="sales-report"
      style={{
        background: darkMode && "#2d3748",
        color: darkMode && "white",
      }}
    >
      <div className="sales-title">
        <p style={{ color: darkMode && "white" }}>Top Platform</p>
        <p>See All</p>
      </div>
      <div className="sales-platform">
        <div className="report-content">
          <p style={{ color: darkMode && "white" }}>Book Bazaar</p>
          <div className="bar-progress">
            <div
              className="progress"
              style={{ width: "246px", background: "#6160dc" }}
            />
          </div>

          <div className="report-a">
            <p style={{ color: darkMode && "white" }}>$2,500,000</p>
            <p style={{ color: darkMode && "white" }}>+15%</p>
          </div>
        </div>
      </div>
      <div className="sales-platform">
        <div className="report-content">
          <p style={{ color: darkMode && "white" }}>Artisan Aisle</p>
          <div className="bar-progress">
            <div className="bar-p" />
            <div
              className="progress"
              style={{ width: "204.313px", background: "#54C5EB" }}
            />
          </div>
          <div className="report-a">
            <p style={{ color: darkMode && "white" }}>$1,800,000</p>
            <p style={{ color: darkMode && "white" }}>+10%</p>
          </div>
        </div>
      </div>
      <div className="sales-platform">
        <div className="report-content">
          <p style={{ color: darkMode && "white" }}>Toy Troop</p>
          <div className="bar-progress">
            <div className="bar-p" />
            <div
              className="progress"
              style={{ width: "122px", background: "#FFB74A" }}
            />
          </div>
          <div className="report-a">
            <p style={{ color: darkMode && "white" }}>$1,200,000</p>
            <p style={{ color: darkMode && "white" }}>+8%</p>
          </div>
        </div>
      </div>
      <div className="sales-platform">
        <div className="report-content">
          <p style={{ color: darkMode && "white" }}>XStore</p>
          <div className="bar-progress">
            <div className="bar-p" />
            <div
              className="progress"
              style={{ width: "122px", background: "#FF4A55" }}
            />
          </div>
          <div className="report-a">
            <p style={{ color: darkMode && "white" }}>$600,000</p>
            <p style={{ color: darkMode && "white" }}>+5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
