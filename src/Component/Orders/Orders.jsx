import React from "react";
import "./Orders.css";
import bergson from "../../images/bergson.png";
import Jaydon from "../../images/jaydon.png";
import corey from "../../images/corey.png";
import cooper from "../../images/cooper.png";
import lubin from "../../images/lubin.png";
import doc from "../../images/document-download.svg";

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders-title">
        <p>Last Orders</p>
        <p>See All</p>
      </div>
      <div className="orders-header">
        <p>Name</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Invoice</p>
      </div>
      <div className="orders-info">
        <div className="orders-info-c">
          <div className="orders-line" />
          <div className="orders-content">
            <div className="orders-prof">
              <div className="orders-text">
                <img src={bergson} alt="" />
                <p style={{ color: "#3A3F51" }}>Marcus Bergson</p>
              </div>
            </div>
            <p
              style={{ width: "10.25rem", color: "#737373", fontWeight: "200" }}
            >
              Dec 27, 2024
            </p>
            <p style={{ width: "9.5rem", color: "#0D062D" }}>$80,000</p>
            <p style={{ width: "8rem", color: "#34CAA5" }}>paid</p>
            <div className="orders-icon">
              <img src={doc} alt="" />
              <p>View</p>
            </div>
          </div>
        </div>
        <div className="orders-info-c">
          <div className="orders-line" />
          <div className="orders-content">
            <div className="orders-prof">
              <div className="orders-text">
                <img src={Jaydon} alt="" />
                <p style={{ color: "#3A3F51" }}>Jaydon Vaccaro</p>
              </div>
            </div>
            <p
              style={{ width: "10.25rem", color: "#737373", fontWeight: "200" }}
            >
              Dec 26, 2024
            </p>
            <p style={{ width: "9.5rem", color: "#0D062D" }}>$150,000</p>
            <p style={{ width: "8rem", color: "red" }}>Refund</p>
            <div className="orders-icon">
              <img src={doc} alt="" />
              <p>View</p>
            </div>
          </div>
        </div>
        <div className="orders-info-c">
          <div className="orders-line" />
          <div className="orders-content">
            <div className="orders-prof">
              <div className="orders-text">
                <img src={corey} alt="" />
                <p style={{ color: "#3A3F51" }}>Corey Schleifer</p>
              </div>
            </div>
            <p
              style={{ width: "10.25rem", color: "#737373", fontWeight: "200" }}
            >
              Dec 24, 2024
            </p>
            <p style={{ width: "9.5rem", color: "#0D062D" }}>$87,000</p>
            <p style={{ width: "8rem", color: "#34CAA5" }}>paid</p>
            <div className="orders-icon">
              <img src={doc} alt="" />
              <p>View</p>
            </div>
          </div>
        </div>
        <div className="orders-info-c">
          <div className="orders-line" />
          <div className="orders-content">
            <div className="orders-prof">
              <div className="orders-text">
                <img src={cooper} alt="" />
                <p style={{ color: "#3A3F51" }}>cooper Press</p>
              </div>
            </div>
            <p
              style={{ width: "10.25rem", color: "#737373", fontWeight: "200" }}
            >
              Dec 27, 2024
            </p>
            <p style={{ width: "9.5rem", color: "#0D062D" }}>$100,000</p>
            <p style={{ width: "8rem", color: "red" }}>Refund</p>
            <div className="orders-icon">
              <img src={doc} alt="" />
              <p>View</p>
            </div>
          </div>
        </div>
        <div className="orders-info-c">
          <div className="orders-line" />
          <div className="orders-content">
            <div className="orders-prof">
              <div className="orders-text">
                <img src={lubin} alt="" />
                <p style={{ color: "#3A3F51" }}>Phillip Lubin</p>
              </div>
            </div>
            <p
              style={{ width: "10.25rem", color: "#737373", fontWeight: "200" }}
            >
              Dec 27, 2024
            </p>
            <p style={{ width: "9.5rem", color: "#0D062D" }}>$78,000</p>
            <p style={{ width: "8rem", color: "#34CAA5" }}>paid</p>
            <div className="orders-icon">
              <img src={doc} alt="" />
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
