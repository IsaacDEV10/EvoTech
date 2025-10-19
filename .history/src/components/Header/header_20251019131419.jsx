import React from 'react'
import './Header.css'
import logo from '../../assets/evotech.png'


const Header = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src={logo} alt="" />
            <ul>
                <li>
                    <a className='menu-item' href="">Home</a>
                </li>

                <li>
                    <a className='menu' href="">Sobre</a>
                </li>

                <li>
                    <a href="">Projetos</a>
                </li>
                <button className='contact-btn'>Contato</button>
            </ul>
        </div>
    </nav>
  )
}

export default Header