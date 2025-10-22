import React from "react";
import "./hero.css";
import heroImage from "../../assets/bg-evotech.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <img className="img-bg" src={heroImage} alt="hero" />
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