import React from "react";
import "./hero.css";
import heroVideo from "../../assets/evotech-bg.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <img className="img-bg" src={heroVideo} alt="hero" autoPlay loop muted />
        </div>
        <div className="description">
            <h1>
                Inovação e Tecnologia para o Futuro
            </h1>
            <p>
                Na Evotech, estamos comprometidos em transformar ideias em soluções tecnológicas inovadoras que impulsionam o futuro. Junte-se a nós nessa jornada de inovação!
            </p>
        </div>
    </section>
  );
};

export default Hero;