import React from 'react'
import '../css/navbar.css'

function Navbar() {
  return (
    <div>
       <div className='nav-container'> 
        <nav id='nav-large'>
            <ul>
                <li className='nav-option main'><h3>Tournament Sphere</h3></li>
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

    </div>
  )
}

export default Navbar