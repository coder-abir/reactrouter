/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="border p-5 bg-emerald-400">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
