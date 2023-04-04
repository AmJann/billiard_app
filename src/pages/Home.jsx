import React from 'react'
import Navbar from '../components/Navbar'
import Listings from '../components/Listings'
import '../css/home.css'

function Home() {
  return (
    <>
    <div id ='navbarCompContainer'>
        <Navbar />
    </div>
    <div id ='listingCompContainer'>
        <Listings />
    </div>
    </>
  )
}

export default Home