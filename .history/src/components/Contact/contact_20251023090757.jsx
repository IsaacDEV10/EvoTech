import React, { useState } from 'react';
// As dependências 'reactjs-popup' e 'react-icons' foram removidas
// para corrigir o erro de compilação.

/**
 * Componente de Estilos
 * Isso injeta todo o seu CSS em uma tag <style>
 * para que funcione em um único arquivo.
 */
const ContactStyles = () => (
  <style>{`
    
    .custom-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(40, 44, 52, 0.8);
      opacity: 0;
      visibility: hidden; /* Esconde para não ser interativo */
      transition: opacity 0.3s ease-in-out, visibility 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    
    .custom-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .custom-modal-content {
      opacity: 0;
      transform: scale(0.95);
      visibility: hidden;
      transition: opacity 0.3s ease-out, transform 0.3s ease-out, visibility 0.3s;
      z-index: 1000;
      
    }

   
    .custom-modal-content.open {
      opacity: 1;
      transform: scale(1);
      visibility: visible;
    }

    /* Seus estilos originais do botão */
    .contact-btn {
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #2D6FBF;
      padding: 0.6rem 2rem;
      border: none;
      outline: 1.5px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .contact-btn a {
      text-decoration: none;
      color: #fff;
    }

    .contact-btn:hover {
      color: black;
      background: #76F014;
      outline: 1.5px solid black;
    }

   
    .popup-container {
      background-color: #282C34;
      padding: 50px !important; /* Manteve o !important do seu código */
      border-radius: 15px !important;
      border: none !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
      width: 400px;
      position: relative; /* Necessário para o botão fechar */
    }

    .popup-header {
      text-align: center;
      margin-bottom: 20px;
      color: #76F014;
    }

    .icon-container {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 20px;
    }
    
    .icon-container a {
      transition: transform 0.2s ease;
    }
    
    .icon-container a:hover {
      transform: scale(1.15);
    }

    .popup-close-button {
      position: absolute;
      top: 15px; 
      right: 15px; 
      border: none;
      background: none;
      font-size: 1.8rem; 
      cursor: pointer;
      color: #ffffff;
      line-height: 1;
      transition: color 0.2s ease;
    }
    
    .popup-close-button:hover {
      color: #76F014;
    }
  `}</style>
);

// Ícones SVG embutidos para substituir o react-icons
const IconInstagram = ({ size, color }) => (
  <svg height={size} width={size} viewBox="0 0 48 48" fill={color}>
    <path d="M14.02 42A8.03 8.03 0 0 1 6 33.98V14.02A8.03 8.03 0 0 1 14.02 6h19.96A8.03 8.03 0 0 1 42 14.02v19.96A8.03 8.03 0 0 1 33.98 42H14.02z" stroke="#000" strokeWidth="3" strokeLinejoin="round" fill="none" />
    <path d="M34.6 13.4a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0z" fill={color} />
    <path d="M24 30.75a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" stroke="#000" strokeWidth="3" strokeLinejoin="round" fill="none" />
  </svg>
);

const IconPhone = ({ size, color }) => (
  <svg height={size} width={size} viewBox="0 0 24 24" fill={color}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const IconMail = ({ size, color }) => (
  <svg height={size} width={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);


const Contact = () => {
  // Estado para controlar se o modal está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* O botão que aciona o popup */}
      <button className="contact-btn" onClick={openModal}>
        Contato
      </button>

      {/* O Overlay (fundo) do modal */}
      {/* Adicionamos a classe 'open' condicionalmente */}
      <div 
        className={`custom-overlay ${isOpen ? 'open' : ''}`} 
        onClick={closeModal} // Fecha ao clicar no fundo
      >
        {/* O Conteúdo do modal */}
        {/* Adicionamos a classe 'open' condicionalmente */}
        <div 
          className={`custom-modal-content ${isOpen ? 'open' : ''}`}
          onClick={e => e.stopPropagation()} // Impede de fechar ao clicar no conteúdo
        >
          {/* Seu container de popup original */}
          <div className="popup-container">
            {/* Botão Fechar */}
            <button
              onClick={closeModal}
              className="popup-close-button"
            >
              &times;
            </button>
            
            {/* Cabeçalho */}
            <div className="popup-header">
              <h2>Fale Conosco!</h2>
              <p>Escolha o melhor canal de contato:</p>
            </div>
            
            {/* Ícones */}
            <div className="icon-container">
              
              {/* Instagram (SVG) */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <IconInstagram size={35} color="#E1306C" />
              </a>

              {/* Telefone/WhatsApp (SVG) */}
              <a href="tel:+5511987654321" title="Telefone">
                <IconPhone size={35} color="#25D366" />
              </a>
              
              {/* Email (SVG) */}
              <a href="mailto:seu.email@exemplo.com" title="Email">
                <IconMail size={35} color="#DB4437" />
              </a>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

/
 */
export default function App() {
  return (
    <>
      <ContactStyles />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f0f2f5' 
      }}>
        <Contact />
      </div>
    </>
  );
}

