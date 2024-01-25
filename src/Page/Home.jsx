import React from "react";
import "./Home.css";
import Sidebar from "../Component/Sidebar/Sidebar";
import Conteiner from "../Component/Conteiner/Conteiner";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Conteiner />
    </div>
  );
};

export default Home;
