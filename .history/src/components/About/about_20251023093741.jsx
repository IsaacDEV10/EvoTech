import React from "react";
import "./about.css";
import CarrosselDeFotos from '../Carousel/carousel'
import Robo1 from '../../assets/robo-1.png'
import Robo2 from '../../assets/robo-2.png'
import Robo3 from '../../assets/robo-3.png'

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
                <div className="about-text">
                <h1>Sobre Nós</h1>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;