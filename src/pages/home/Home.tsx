import React from "react";
import "./home.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeContent from "../../components/content/HomeContent";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <Sidebar />
      <Outlet />
      <HomeContent />
    </div>
  );
};
export default Home;
