import "./about.css";
import Logo from "../../assets/EvoTech.svg"

const About = () => {
    return (
        <section className="about-container" id="sobre">
            <h1>Sobre Nós</h1>
            <div className="about-content">
                <div className="about-text-content">
                    <h1>Moldando a Próxima Era da Robótica</h1>
                    <p>Na EvoTech, acreditamos que o futuro do trabalho e da produtividade está intrinsecamente ligado à robótica avançada. Somos uma startup apaixonada e visionária, dedicada a projetar, desenvolver e implementar soluções robóticas inteligentes que não apenas otimizam processos, mas também abrem novas possibilidades para indústrias e para a sociedade. <br /> Nossa missão é simples, mas audaciosa: transformar complexidade em eficiência através de sistemas robóticos intuitivos e de alto desempenho.

Vamos além da automação básica. Criamos parceiros mecânicos que aprendem, se adaptam e trabalham lado a lado com humanos para resolver os desafios mais difíceis do mundo moderno — desde a logística de precisão até a assistência em ambientes perigosos.</p>
                </div>
                <div className="about-image">
                    <img width={800} height={450} src={Logo} alt="Logo da EvoTech" />
                </div>
            </div>
        </section>
    );
};

export default About;   