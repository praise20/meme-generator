import React from 'react'
import logo from "../images/logo.png"

function Header() {
  return (
    <div className='header'>
        <img className='header-img' src={logo} alt='logo image'/>
        <h2 className='header-text'>Meme Generator</h2>
    </div>
  )
}

export default Header