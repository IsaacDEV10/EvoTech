import React from "react";
import "./about.css";
import Robo1 from "../../assets/robo-1.png"
import Robo2 from "../../assets/robo-2.png"
import Robo3 from "../../assets/robo-3.png"

const About = () => {
    return (
        <section className="about-container" id="home">
            <div className="about-content">
                <div className="img-about">
                    <img src={Robo1} alt="robo" />
                </div>
                <div className="img-about">
                    <img src={Robo2} alt="robo" />
                </div>
                <div className="img-about">
                    <img src={} alt="robo" />
                </div>
                <div className="about-body">
                    <h1>
                        Sobre nós!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et porro quis aliquam reiciendis, eos itaque unde illum <br />ad consequatur inventore, expedita perferendis sapiente fugiat omnis nihil nostrum tempore fuga.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;