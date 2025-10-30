import Foto1 from '../../assets/foto-1.jpg';
import Foto2 from '../../assets/foto-2.jpg';
import Foto3 from '../../assets/foto-3.jpg';

import './missao.css';

const Missao = () => {
    return (
        <section>
            <div className="missao-container" id="missao">
                <div className="missao-description">
                    <h1>
                        Missão 
                    </h1>
                    <img src={Foto1} alt="foto" />
                    <p>
                        Trazer tecnologia como facilitadora de vidas e garantir a soberania digital.
                    </p>
                </div>
                <div className="missao-description">
                    <h1>
                        Valores
                    </h1>
                     <img src={Foto2} alt="foto" />
                    <p>
                        Ser reconhecida no Brasil como empresa de tecnologia voltada à soluções integradas de robótica e sistemas.
                    </p>
                </div>
                <div className="missao-description">
                    <h1>
                        Visão
                    </h1>
                     <img src={Foto3} alt="foto" />
                    <p>
                        Colaboração, Engenhosidade, Humanidade, Integração e Inovação.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Missao;   