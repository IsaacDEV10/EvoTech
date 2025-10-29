import React from 'react'
import './header.css'
import logo from '../../assets/evotech.png'
import Contact from '../Contact/contact'


const Header = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src={logo} alt="" />
            <ul>
                <li>
                    <a className='menu-item' href="#home">Home</a>
                </li>

                <li>
                    <a className='menu-item' href="#sobre">Sobre</a>
                </li>

                <li>
                    <a className='menu-item' href="#projetos">Projetos</a>
                </li>
                <Contact/>
            </ul>
        </div>
    </nav>
  )
}

export default Header