import React, { useState } from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa"
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className='main-nav'>
        {/* 1.logo part */}
        <div className="logo">
          <h2>
            <span>S</span>ai
            <span>C</span>haran
          </h2>
        </div>
        {/* 2.menu part */}
        <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }  >
          <ul>
            <li>
              <a href='#h'>Home</a>
            </li>
            <li>
              <a href='#a'>About</a>
            </li>
            <li>
              <a href="#s">Services</a>
            </li>
            <li>
              <a href='#c'>Contact</a>
            </li>
          </ul>
        </div>
        {/* 3.social-media links */}
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href="https://facebook.com" target="_c">
                <FaFacebookSquare className="facebook"/>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_c">
                <FaInstagramSquare className="instagram"/>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_c">
                <FaYoutubeSquare className="youtube"/>
              </a>
            </li>
          </ul>
          {/* hamburger menu */}

            <div className="hamburger-menu">
              <a href='#h' onClick={()=>setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu/>
              </a>
            </div>

        </div>
      </nav>

      {/* hero section */}
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Web Application</h1>
      </section>

    </>
  )
}

export default NavBar;