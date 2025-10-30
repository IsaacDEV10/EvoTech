import React from 'react';
import Popup from 'reactjs-popup';
import './contact.css'; 
import { FaInstagram } from 'react-icons/fa'; 
import { MdPhone } from 'react-icons/md'; 
import { FiMail } from 'react-icons/fi'; 

const Contact = () => (
  <Popup 
    trigger={<button className="contact-btn"> Contato </button>} 
    modal 
    animation="fade" 
    overlayClassName="custom-overlay" 
    contentClassName="custom-modal-content"
  >
    {close => (
      <div className="popup-container">
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
          
          <h3>
            Inovação em <br /> Hardware e Software
          </h3>

          <h1>Entre em Contato!</h1>
          
        </div>
        
        
      </div>
    )}
  </Popup>
);

export default Contact;