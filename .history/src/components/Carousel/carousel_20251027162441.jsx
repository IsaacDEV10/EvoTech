import React from 'react';
import './carousel.css'; 

// Se for usar o método de importação de imagens:
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';
// import img4 from './images/img4.png';
// import img5 from './images/img5.png';
// import img6 from './images/img6.png';


function MeuComponente() {
  return (
    <>
      <div className="carousel">
        <div className="list">
          <div className="item">
            {/* Use o src importado (ex: src={img1}) 
              ou o caminho da pasta public (ex: src="/images/img1.png") 
            */}
            <img src="images/img1.png" alt="" />
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
            <img src="images/img2.png" alt="" />
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
            <img src="images/img3.png" alt="" />
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

export default MeuComponente;