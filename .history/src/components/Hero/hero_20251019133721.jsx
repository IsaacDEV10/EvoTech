import React from "react";
import "./hero.css";
import heroImage from "../../assets/bg-evotech.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <img classNamesrc={heroImage} alt="hero" />
        </div>
    </section>
  );
};

export default Hero;