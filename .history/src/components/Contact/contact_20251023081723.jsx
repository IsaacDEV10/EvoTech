import React from 'react';
import Popup from 'reactjs-popup';
import './contact.css'

const Contact = () => (
  <Popup 
    trigger={<button className="contact-btn"> Contato </button>} 
    position="right center" // Posição onde o popup aparece
    modal // Faz com que ele se comporte como um modal (ocupa a tela toda)
  >
    {close => ( // O "close" é uma função para fechar o popup programaticamente
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Meu Popup Simples </div>
        <div className="content">
          {' '}
          Este é o conteúdo do popup! Clique no "X" para fechar.
        </div>
      </div>
    )}
  </Popup>
);

export default Contact;