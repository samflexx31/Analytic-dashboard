import React from "react";
import "./Conteiner.css";
import Header from "../Header/Header";
import SalesTrend from "../SalesTrend/SalesTrend";
import Orders from "../Orders/Orders";
import { Cbox, CboxFour, CboxThree, CboxTwo } from "../C-box/Cbox";
import SalesReport from "../SalesReport/SalesReport";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Conteiner = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="conteiner"
      style={{
        background: darkMode ? "#2d3748" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Header />
      <div className="leri">
        <div className="l-leri">
          <SalesTrend />
          <Orders />
        </div>
        <div className="r-leri">
          <Cbox />
          <CboxTwo />
          <CboxThree />
          <CboxFour />
          <SalesReport />
        </div>
      </div>
    </div>
  );
};

export default Conteiner;
