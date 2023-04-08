import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <header class="g-header text-center landings__header landings__header--with-hero-image">
        <div
          class="container"
          style={{
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          <h1
            style={{
              fontWeight: "300",
              fontSize: "50px",
              width: "50%",
              margin: "auto",
              paddingBottom: "2rem",
            }}
          >
            Analysis of Drugs using machine learning
          </h1>
          <p
            class="landings__header-description"
            style={{
              fontWeight: "500",
              fontSize: "15px",
              width: "50%",
              margin: "auto",
              paddingBottom: "2rem",
            }}
          >
            This application will list the most common medications along with
            any side effects they may have and the age ranges in which they are
            most frequently used.
          </p>

          <div class="landings__header-image">
            <img
              src="https://duckbase-infogram.jifo.co/uploads/landing/hero/7/full_pie_chart.png"
              alt="interactive_pie_charts"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
