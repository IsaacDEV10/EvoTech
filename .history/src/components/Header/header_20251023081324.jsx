import React from 'react'
import './header.css'
import logo from '../../assets/evotech.png'
import Contact from '..'


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
                    <a className='menu-item' href="">Sobre</a>
                </li>

                <li>
                    <a className='menu-item' href="">Projetos</a>
                </li>
                <Contact/>
            </ul>
        </div>
    </nav>
  )
}

export default Header