import React from 'react';
import './carousel.css';


const Carousel = () => {
    const items = [
        { img: Robo1, alt: 'Robo 1' },
        { img: Robo2, alt: 'Robo 2' },
        { img: Robo3, alt: 'Robo 3' },
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

export default Carousel;