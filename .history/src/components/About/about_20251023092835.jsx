import React from "react";
import "./about.css";
import CarrosselDeFotos from '../Carousel/carousel'
import robot1 from '../../assets/robot1.jpg'
import robot2 from '../../assets/robot2.jpg'
import robot3 from '../../assets/robot3.jpg'

const Robos = [
  { url: '../../assets/robot1.jpg', alt: 'Descrição Foto 1' },
  { url: '../../assets/robot2.jpg', alt: 'Descrição Foto 2' },
  { url: '../../assets/robot3.jpg', alt: 'Descrição Foto 3' },
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