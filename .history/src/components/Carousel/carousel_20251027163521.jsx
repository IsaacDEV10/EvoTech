import React from 'react';
import './carousel.css'; 
import Robo1 from '../../assets/robo-1.png';
import Robo2 from '../../assets/robo-2.png';
import Robo3 from '../../assets/robo-3.png';
import'''



function Carousel() {

    let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
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
            <img src="images/img4.png" alt="" />
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
            <img src="images/img5.png" alt="" />
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
            <img src="images/img6.png" alt="" />
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