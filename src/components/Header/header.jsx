
import './header.css'
import React, { useState } from 'react';
import logo from '../../assets/EvoTech.svg'
import Contact from '../Contact/contact'
import MobileNav from '../MobileNav/MobileNav';





const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
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
                        <Contact />
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}></button>
                    <span>=</span>
                </div>
            </nav>
        </>
    )
}


export default Header