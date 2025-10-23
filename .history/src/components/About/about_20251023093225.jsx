import React from "react";
import "./about.css";
import CarrosselDeFotos from '../Carousel/carousel'
import Robo1 from '.'
import Robo2 from '../../assets/robo-2.jpg'
import Robo3 from '../../assets/robo-3.jpg'

const Robos = [
  { url: Robo1, alt: 'Pôr do sol na praia' },
  { url: Robo2, alt: 'Montanhas nevadas' },
  { url: Robo3, alt: 'Flor em close-up' },
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