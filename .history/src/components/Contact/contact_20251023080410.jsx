import React from 'react'
import './contact.css'



const Header = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src="" alt="" />
            <ul>
                <li>
                    <a className='menu-item' href="">Home</a>
                </li>

                <li>
                    <a className='menu-item' href="">Sobre</a>
                </li>

                <li>
                    <a className='menu-item' href="">Projetos</a>
                </li>
                <button className='contact-btn'>Contato</button>
            </ul>
        </div>
    </nav>
  )
}

export default Contact