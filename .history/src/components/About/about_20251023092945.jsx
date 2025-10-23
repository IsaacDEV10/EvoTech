import React from "react";
import "./about.css";
import CarrosselDeFotos from '../Carousel/carousel'


const minhasFotos = [
  { url: foto1, alt: 'Pôr do sol na praia' },
  { url: foto2, alt: 'Montanhas nevadas' },
  { url: foto3, alt: 'Flor em close-up' },
];

const About = () => {
    return (
        <section className="about-container" id="home">
            <div className="about-content">
                <div className="about-image">
                <CarrosselDeFotos fotos={Robos} />
                </div>
                <div className="about-text">
                <h1>Sobre Nós</h1>
                </div>
            </div>
        </section>
    );
};

export default About;