import React from 'react';
import Popup from 'reactjs-popup';
// Importa os ícones que você deseja usar
import { FaInstagram } from 'react-icons/fa'; 
import { MdPhone } from 'react-icons/md'; 
import { FiMail } from 'react-icons/fi'; 

// Estilos para o popup (fundo branco, transição suave)
const customContentStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '8px',
  border: 'none',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  width: '300px' // Define uma largura para o popup
};

const Contact = () => (
  <Popup 
    trigger={<button className="button-popup"> Abrir Contato </button>} 
    modal 
    animation="fade" // Efeito suave
    contentStyle={customContentStyle}
    overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
  >
    {close => (
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={close} 
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            border: 'none', 
            background: 'none', 
            fontSize: '1.5rem', 
            cursor: 'pointer' 
          }}>
          &times;
        </button>
        
        <h2>Fale Conosco!</h2>
        <p>Escolha o melhor canal de contato:</p>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
          
          {/* ÍCONE 1: Instagram */}
          <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
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
        
        <button 
          onClick={close} 
          style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Fechar
        </button>
      </div>
    )}
  </Popup>
);

export default MyPopup;