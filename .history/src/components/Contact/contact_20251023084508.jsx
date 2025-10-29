import React from 'react';
import Popup from 'reactjs-popup';
// Importa o arquivo de estilos
import './contact.css'; 

// Importa os ícones
import { FaInstagram } from 'react-icons/fa'; 
import { MdPhone } from 'react-icons/md'; 
import { FiMail } from 'react-icons/fi'; 

const Contact = () => (
  <Popup 
    trigger={<button className="contact-btn"> Contato </button>} 
    modal 
    animation="fade" 
    
    // Aplica as classes CSS personalizadas
    overlayClassName="custom-overlay" 
    contentClassName="custom-modal-content"
  >
    {close => (
      <div>
        {}
        <button 
          onClick={close} 
          className="popup-close-button"
        >
          &times;
        </button>
        
        {}
        <div className="popup-header">
          <h2>Fale Conosco!</h2>
          <p>Escolha o melhor canal de contato:</p>
        </div>
        

        {}
        <div className="icon-container">
          
          {/* ÍCONE 1: Instagram */}
          <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            {/* A cor e o tamanho ainda são passados por props para o ícone, 
               pois é a forma mais limpa de estilizar componentes do react-icons */}
            <FaInstagram size={35} color="#E1306C" />
          </a>

          {/* ÍCONE 2: Telefone/Contato */}
          <a href="tel:+5511987654321">
            <MdPhone size={35} color="#25D366" />
          </a>
          
          {/* ÍCONE 3: E-mail */}
          <a href="mailto:seu.email@exemplo.com">
            <FiMail size={35} color="#DB4437" />
          </a>
          
        </div>
        
        {/* Botão Fechar no rodapé usa a classe .popup-footer-button */}
        <button 
          onClick={close} 
          className="popup-footer-button"
        >
          Fechar
        </button>
      </div>
    )}
  </Popup>
);

export default Contact;