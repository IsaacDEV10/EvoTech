import React, { useState, useRef, useEffect } from 'react';
import './carrossel.css'; 
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
    title: 'Robo de Soldagem',
    topic: 'Crobotp',
    des: 'Robô de soldagem industrial de alta performance e cor azul, configurado para operações contínuas e precisas. O modelo Crobotp é projetado para integração em células de trabalho automatizadas, otimizando o ciclo de produção em indústrias que demandam soldagem de alta qualidade e repetibilidade.',
    detailTitle: 'Robo Crobotp',
    detailDes: 'Robô de soldagem industrial de alta performance e cor azul, configurado para operações contínuas e precisas. O modelo Crobotp é projetado para integração em células de trabalho automatizadas, otimizando o ciclo de produção em indústrias que demandam soldagem de alta qualidade e repetibilidade.',
  },
  {
    id: 2,
    imgSrc: Robo2,
    title: 'Robo de Soldagem',
    topic: 'B5 00R',
    des: 'Robô industrial articulado, de alta precisão, otimizado para tarefas de soldagem (MIG/MAG ou TIG, dependendo da configuração da tocha). Seu design compacto e alcance versátil o tornam uma solução eficiente para automatizar a produção, garantindo soldas consistentes e aumentando a produtividade e a segurança na linha de montagem.',
    detailTitle: 'Robo B5 00R',
    detailDes: ' Robô industrial articulado, de alta precisão, otimizado para tarefas de soldagem (MIG/MAG ou TIG, dependendo da configuração da tocha). Seu design compacto e alcance versátil o tornam uma solução eficiente para automatizar a produção, garantindo soldas consistentes e aumentando a produtividade e a segurança na linha de montagem.',
  },
  {
    id: 3,
    imgSrc: Robo3,
    title: 'Robo de Soldagem',
    topic: 'GSK BRASIL',
    des: 'O modelo GSK BRASIL representa uma solução de automação de ponta, ideal para indústrias que buscam aumentar drasticamente a produtividade, manter a uniformidade na produção em massa e otimizar os custos operacionais. É a ferramenta perfeita para a soldagem de precisão em linhas de montagem exigentes.',
    detailTitle: 'Robo GSK BRASIL',
    detailDes: ' O modelo GSK BRASIL representa uma solução de automação de ponta, ideal para indústrias que buscam aumentar drasticamente a produtividade, manter a uniformidade na produção em massa e otimizar os custos operacionais. É a ferramenta perfeita para a soldagem de precisão em linhas de montagem exigentes.',
  },
  {
    id: 4,
    imgSrc: Robo4,
    title: 'Robo de Soldagem',
    topic: 'VIBAZ',
    des: 'O Robô de Soldagem VIBAZ é apresentado como uma solução eficiente para automatizar a produção, pois garante soldas consistentes e contribui para o aumento da produtividade e segurança na linha de montagem. É uma máquina projetada para otimizar tarefas de soldagem industrial.',
    detailTitle: 'Robo VIBAZ',
    detailDes: ' O Robô de Soldagem VIBAZ é apresentado como uma solução eficiente para automatizar a produção, pois garante soldas consistentes e contribui para o aumento da produtividade e segurança na linha de montagem. É uma máquina projetada para otimizar tarefas de soldagem industrial.',
  },
  {
    id: 5,
    imgSrc: Robo5,
    title: 'Robo de Soldagem',
    topic: 'Sumig',
    des: 'O Robô de Soldagem Sumig é uma solução de automação avançada que combina um design clean com a força e a precisão necessárias para transformar processos de fabricação, elevando a produtividade e a segurança operacional a novos patamares.',
    detailTitle: 'Robo Sumig',
    detailDes: 'O Robô de Soldagem Sumig é uma solução de automação avançada que combina um design clean com a força e a precisão necessárias para transformar processos de fabricação, elevando a produtividade e a segurança operacional a novos patamares.',
  },
  {
    id: 6,
    imgSrc: Robo6,
    title: 'Robo de Soldagem',
    topic: 'Texai',
    des: 'O Robô de Soldagem Texai combina a robustez e a engenharia de uma marca global com a precisão necessária para a soldagem industrial moderna, oferecendo às empresas uma solução poderosa para maximizar a eficiência e a qualidade na produção.',
    detailTitle: 'Robo Texai',
    detailDes: 'O Robô de Soldagem Texai combina a robustez e a engenharia de uma marca global com a precisão necessária para a soldagem industrial moderna, oferecendo às empresas uma solução poderosa para maximizar a eficiência e a qualidade na produção.',
  },
  
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
    <h1 className='titulo' id='projetos'>Projetos</h1>
      <div className={`carousel ${carouselClass}`} >
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
                  Veja Mais &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">{item.detailTitle || 'Aerphone GHTK'}</div>
                <div className="des">
                  {item.detailDes || 'Lorem ipsum dolor sit amet...'}
                </div>
                <div className="specifications">
                  <div><p>Soldagem</p><p>Automatizada</p></div>
                  <div><p>Liberdade</p><p>Fluídez</p></div>
                  <div><p>Controle</p><p>Simples</p></div>
                  <div><p>Locomoção</p><p>Fácil</p></div>
                </div>
                <div className="checkout">
                  <button onClick={handleBack}>Retornar</button>
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
          <button id="back" onClick={showSlider}>
            See All&nbsp; &#8599;
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;