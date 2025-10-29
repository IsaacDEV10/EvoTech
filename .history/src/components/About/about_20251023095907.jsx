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
                <div className="about-text-content">
                    <h1>Moldando a Próxima Era da Robótica</h1>
                    <p>Na EvoTech, acreditamos que o futuro do trabalho e da produtividade está intrinsecamente ligado à robótica avançada. Somos uma startup apaixonada e visionária, dedicada a projetar, desenvolver e implementar soluções robóticas inteligentes que não apenas otimizam processos, mas também abrem novas possibilidades para indústrias e para a sociedade. <br /> </p>
                </div>
                <div className="about-image">
                    <CarrosselDeFotos fotos={Robos} />
                </div>
            </div>
        </section>
    );
};

export default About;   