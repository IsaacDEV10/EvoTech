import React from "react";
// Importa os estilos do slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

function CarrosselDeFotos({ fotos }) {
  // Configurações do carrossel (ajuste conforme a necessidade)
  const settings = {
    dots: true,          // Mostra os pontos de navegação
    infinite: true,      // Rolagem infinita
    speed: 500,          // Velocidade da transição (ms)
    slidesToShow: 1,     // Quantidade de slides visíveis
    slidesToScroll: 1,   // Quantidade de slides para rolar
    autoplay: true,      // Ativa a reprodução automática
    autoplaySpeed: 3000, // Intervalo entre os slides (ms)
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}> {/* Container para centralizar e dar largura */}
      <Slider {...settings}>
        {fotos.map((foto, index) => (
          <div key={index}>
            <img 
              src={foto.url} 
              alt={foto.alt} 
              // Adicione estilos para garantir que a imagem preencha o slide
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrosselDeFotos;