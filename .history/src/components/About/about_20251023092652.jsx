import React from "react";
import "./about.css";
import CarrosselDeFotos from '../Carousel/carousel'

const Robos = [
  { url: 'caminho/para/foto1.jpg', alt: 'Descrição Foto 1' },
  { url: 'caminho/para/foto2.jpg', alt: 'Descrição Foto 2' },
  { url: 'caminho/para/foto3.jpg', alt: 'Descrição Foto 3' },
];

const About = () => {
    return (
        <section className="about-container" id="home">
            <div className="about-content">
                <div className="about-image">
                <CarrosselDeFotos fotos={Robosd} />
                </div>
                <div className="about-text">
                <h1>Sobre Nós</h1>
                </div>
            </div>
        </section>
    );
};

export default About;