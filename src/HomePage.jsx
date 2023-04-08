import React from "react";
import Chart from "./components/Chart";
import Hero from "./components/Hero";
import Info from "./components/Info";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Info />
      <Chart />
      <div style={{ padding: "2rem", color: "#58aad7", textAlign: "center" }}>
        <p>Copyright @2023</p>
      </div>
    </>
  );
};

export default HomePage;
