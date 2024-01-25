import React from "react";
import "./Conteiner.css";
import Header from "../Header/Header";
import SalesTrend from "../SalesTrend/SalesTrend";
import Orders from "../Orders/Orders";

const Conteiner = () => {
  return (
    <div className="conteiner">
      <Header />
      <SalesTrend />
      <Orders />
    </div>
  );
};

export default Conteiner;
