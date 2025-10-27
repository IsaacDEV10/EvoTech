import React from 'react';
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
    title: 'DESIGN SLIDER 1',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
    detailTitle: 'Aerphone GHTK 1',
    detailDes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  {
    id: 2,
    imgSrc: Robo2,
    title: 'DESIGN SLIDER 2',
    topic: 'Aerphone',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
    detailTitle: 'Aerphone GHTK 2',
    detailDes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  { id: 3, imgSrc: Robo3, title: 'DESIGN SLIDER 3', topic: 'Aerphone', /*...etc*/ },
  { id: 4, imgSrc: Robo4, title: 'DESIGN SLIDER 4', topic: 'Aerphone', /*...etc*/ },
  { id: 5, imgSrc: Robo5, title: 'DESIGN SLIDER 5', topic: 'Aerphone', /*...etc*/ },
  { id: 6, imgSrc: Robo6, title: 'DESIGN SLIDER 6', topic: 'Aerphone', /*...etc*/ },
];

function Carousel() {
  // 3. Use "State" para controlar a lógica
  const [items, setItems] = useState(initialItemsData);
  const [carouselClass, setCarouselClass] = useState('');
  const [isClickDisabled, setIsClickDisabled] = useState(false);
  const timeoutRef = useRef(null);

  // Limpa o timeout se o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 4. Crie funções "Handler" para a lógica
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
    }, 2000); // O seu código usava 2000ms
  };

  const handleSeeMore = () => {
    setCarouselClass('showDetail');
  };

  const handleBack = () => {
    setCarouselClass('');
  };

function Carousel() {
    
  return (
    <>
      <div className="carousel">
        <div className="list">
          <div className="item">
            
            <img src={Robo1} alt="" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                laborum cumque dignissimos quidem atque et eligendi aperiam
                voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci aut
                distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
                Accusamus architecto dolores modi ducimus facilis quas
                voluptatibus! Tempora ratione accusantium magnam nulla tenetur
                autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={Robo2} alt="" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                laborum cumque dignissimos quidem atque et eligendi aperiam
                voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci aut
                distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
                Accusamus architecto dolores modi ducimus facilis quas
                voluptatibus! Tempora ratione accusantium magnam nulla tenetur
                autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={Robo3} alt="" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                laborum cumque dignissimos quidem atque et eligendi aperiam
                voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci aut
                distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
                Accusamus architecto dolores modi ducimus facilis quas
                voluptatibus! Tempora ratione accusantium magnam nulla tenetur
                autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={Robo4} alt="" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                laborum cumque dignissimos quidem atque et eligendi aperiam
                voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci aut
                distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
                Accusamus architecto dolores modi ducimus facilis quas
                voluptatibus! Tempora ratione accusantium magnam nulla tenetur
                autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={Robo5} alt="" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                laborum cumque dignissimos quidem atque et eligendi aperiam
                voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci aut
                distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
                Accusamus architecto dolores modi ducimus facilis quas
                voluptatibus! Tempora ratione accusantium magnam nulla tenetur
                autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={Robo6} alt="" />
            <div className="introduce">
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                {/* 20 lorem */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                laborum cumque dignissimos quidem atque et eligendi aperiam
                voluptates beatae maxime.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                {/* lorem 50 */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci aut
                distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
                Accusamus architecto dolores modi ducimus facilis quas
                voluptatibus! Tempora ratione accusantium magnam nulla tenetur
                autem beatae.
              </div>
              <div className="specifications">
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
          <button id="back">See All&nbsp; &#8599;</button>
        </div>
      </div>
    </>
  );
}

export default Carousel;