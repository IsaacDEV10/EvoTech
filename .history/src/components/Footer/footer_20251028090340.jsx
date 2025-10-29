import React from 'react'
import './footer.css'
import Logo from '../../assets/evotech.png';

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2024 EvoTech</p>
        <img src={Logo} alt="" />
    </div>
  )
}

export default Footer