import React from 'react'
import './footer.css'
import Logo from '../../assets/EvoTech.png';

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2025 EvoTech</p>
        <img src={Logo} alt="logo" />
    </div>
  )
}

export default Footer