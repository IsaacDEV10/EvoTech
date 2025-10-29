import React, { useState, useRef, useEffect } from 'react';
import './carousel.css'; 
import Robo1 from '../../assets/robo-1.png';
import Robo2 from '../../assets/robo-2.png';
import Robo3 from '../../assets/robo-3.png';
import Robo4 from '../../assets/robo-4.png';
import Robo5 from '../../assets/robo-5.png';
import Robo6 from '../../assets/robo-6.png';

const initialItemsData = [
  {
    id: 1,
    imgSrc: Robo1,
    title: 'Robo de Soldagem 1',
    topic: 'Crobotp',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
    detailTitle: 'Robo Crobotp',
    detailDes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  {
    id: 2,
    imgSrc: Robo2,
    title: 'Robo de Soldagem 2',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
    detailTitle: 'Aerphone GHTK 2',
    detailDes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  { id: 3, imgSrc: Robo3, title: 'DESIGN SLIDER 3', topic: 'Aerphone' },
  { id: 4, imgSrc: Robo4, title: 'DESIGN SLIDER 4', topic: 'Aerphone' },
  { id: 5, imgSrc: Robo5, title: 'DESIGN SLIDER 5', topic: 'Aerphone' },
  { id: 6, imgSrc: Robo6, title: 'DESIGN SLIDER 6', topic: 'Aerphone' },
];

function Carousel() {
  const [items, setItems] = useState(initialItemsData);
  const [carouselClass, setCarouselClass] = useState('');
  const [isClickDisabled, setIsClickDisabled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showSlider = (type) => {
    if (isClickDisabled) return;
    setIsClickDisabled(true); 
    setCarouselClass(type); 

    if (type === 'next') {
      setItems((prevItems) => {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      });
    } else {
      setItems((prevItems) => {
        const last = prevItems[prevItems.length - 1];
        const rest = prevItems.slice(0, -1);
        return [last, ...rest];
      });
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsClickDisabled(false);
    }, 2000);
  };

  const handleSeeMore = () => {
    setCarouselClass('showDetail');
  };

  const handleBack = () => {
    setCarouselClass('');
  };
    
  return (
    <>
      <div className={`carousel ${carouselClass}`}>
        <div className="list">
          {items.map((item) => (
            <div className="item" key={item.id}>
              
              <img src={item.imgSrc} alt="" />
              <div className="introduce">
                <div className="title">{item.title || 'DESIGN SLIDER'}</div>
                <div className="topic">{item.topic || 'Aerphone'}</div>
                <div className="des">
                  {item.des || 'Lorem ipsum dolor sit amet...'}
                </div>
                <button className="seeMore" onClick={handleSeeMore}>
                  SEE MORE &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">{item.detailTitle || 'Aerphone GHTK'}</div>
                <div className="des">
                  {item.detailDes || 'Lorem ipsum dolor sit amet...'}
                </div>
                <div className="specifications">
                  <div><p>Used Time</p><p>6 hours</p></div>
                  <div><p>Charging port</p><p>Type-C</p></div>
                  <div><p>Compatible</p><p>Android</p></div>
                  <div><p>Bluetooth</p><p>5.3</p></div>
                  <div><p>Controlled</p><p>Touch</p></div>
                </div>
                <div className="checkout">
                  <button>ADD TO CART</button>
                  <button>CHECKOUT</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={() => showSlider('prev')} disabled={isClickDisabled}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider('next')} disabled={isClickDisabled}>
            &gt;
          </button>
          <button id="back" onClick={handleBack}>
            See All&nbsp; &#8599;
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;