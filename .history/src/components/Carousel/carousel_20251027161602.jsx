import React from 'react';
import './carousel.css';


const Carousel = () => {
    
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