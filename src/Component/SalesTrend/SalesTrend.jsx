import React from "react";
import "./SalesTrend.css";
import Arrow from "../../images/Arrow - Down 2.svg";
import bar1 from "../../images/bar.png";
import bar2 from "../../images/bar2.png";
import bar3 from "../../images/bar3.png";
import bar4 from "../../images/bar4.png";
import bar5 from "../../images/bar5.png";
import bar6 from "../../images/bar6.png";
import bar7 from "../../images/bar7.png";
import bar8 from "../../images/bar8.png";
import bar9 from "../../images/bar9.png";
import bar10 from "../../images/bar10.png";
import bar11 from "../../images/bar11.png";
import bar12 from "../../images/bar12.png";

const SalesTrend = () => {
  return (
    <div className="sales">
      <div className="title">
        <p>Sales Trends</p>
        <div className="title-date">
          <p>Sort by:</p>
          <div className="date-filter">
            <div className="date-c">
              <p>Weekly</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sales-amount">
        <p>50.000</p>
        <p>40.000</p>
        <p>30.000</p>
        <p>20.000</p>
        <p>10.000</p>
        <p>5.000</p>
        <p>0.000</p>
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
        <p>Jan</p>
        <p>Feb</p>
        <p>Mar</p>
        <p>Apr</p>
        <p>May</p>
        <p>Jun</p>
        <p>Jul</p>
        <p>Aug</p>
        <p>Sep</p>
        <p>Oct</p>
        <p>Nov</p>
        <p>Dec</p>
      </div>
      <div className="bar">
        <img src={bar1} alt="" />
        <img src={bar2} alt="" />
        <img src={bar3} alt="" />
        <img src={bar4} alt="" />
        <img src={bar5} alt="" />
        <img src={bar6} alt="" />
        <img src={bar7} alt="" />
        <img src={bar8} alt="" />
        <img src={bar9} alt="" />
        <img src={bar10} alt="" />
        <img src={bar11} alt="" />
        <img src={bar12} alt="" />
      </div>
    </div>
  );
};

export default SalesTrend;
