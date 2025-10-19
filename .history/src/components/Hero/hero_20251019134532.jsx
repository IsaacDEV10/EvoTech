import React from "react";
import "./hero.css";
import heroImage from "../../assets/bg-evotech.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <img className="img-bg" src={heroImage} alt="hero" />
        </div>
        <div>
            <h1>
                
            </h1>
        </div>
    </section>
  );
};

export default Hero;