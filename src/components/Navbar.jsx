import React from 'react'
import '../css/navbar.css'

function Navbar() {
  return (
    <div>
        <nav id='nav-large'>
            <ul>
                <li className='nav-option main'>
                    Home
                </li>
                <li className='nav-option second'>
                    Tournaments
                </li>
                <li className='nav-option third'>
                    Shop
                </li>
                <li className='nav-option fourth'>
                    News 
                </li>
                <li className='nav-option fifth'>
                    Login/Signup 
                </li>
            </ul>
        </nav>


    </div>
  )
}

export default Navbar