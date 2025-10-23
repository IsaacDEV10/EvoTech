import React from 'react';
import './Carousel3D.css';

// Importe suas imagens (use 8 imagens para este exemplo)
import Robo1 from '../../assets/robo-1.png';
import Robo2 from '../../assets/robo-2.png';
import Robo3 from '../../assets/robo-3.png';
import Robo4 from '../../assets/robo-4.png';
import Robo5 from '../../assets/robo-5.png';
import Robo6 from '../../assets/robo-6.png';
import Robo7 from '../../assets/robo-7.png';
import Robo8 from '../../assets/robo-8.png';

const Carousel3D = () => {
    const items = [
        { img: Robo1, alt: 'Robo 1' },
        { img: Robo2, alt: 'Robo 2' },
        { img: Robo3, alt: 'Robo 3' },
        { img: Robo4, alt: 'Robo 4' },
        { img: Robo5, alt: 'Robo 5' },
        { img: Robo6, alt: 'Robo 6' },
        { img: Robo7, alt: 'Robo 7' },
        { img: Robo8, alt: 'Robo 8' },
    ];

    const quantity = items.length;

    return (
        <div className="carousel-container">
            <div 
                className="carousel-slider" 
                style={{ '--quantity': quantity }}
            >
                {items.map((item, index) => (
                    <div 
                        className="carousel-item" 
                        style={{ '--position': index + 1 }}
                        key={index}
                    >
                        <img src={item.img} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel3D;