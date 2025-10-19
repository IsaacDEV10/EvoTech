import React from "react";
import "./hero.css";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>Construindo Experiências Digitais que Inspiram!</h2>
        <p>
        Desenvolvedor FullStack | Transformando Ideias em Soluções Web Perfeitas e Visualmente Impressionantes
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={react} alt="react" />
          </div>
          <img  src={heroImage} alt="Isaac" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={js} alt="JavaScript" />
          </div>
          <div className="tech-icon">
            <img src={Docker} alt="" />
          </div>
          <div className="tech-icon">
            <img src={Next} alt="" />
          </div>
          <div className="tech-icon">
            <img src={tailwind} alt="" />
          </div>
          <div className="tech-icon">
            <img src={node} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;